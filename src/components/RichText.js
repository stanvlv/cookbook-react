/*
 contentful Rich Text datatype is defined in https://github.com/contentful/rich-text/blob/master/packages/rich-text-types/src/types.ts
*/

/**
 * component that renders rich text provided by content prop
 *
 * @contentful/rich-text-react-renderer is the preferred way of doing this.
 * Personally Im of the opinion that one shouldnt add dependencies to the project
 * unless absolutely necessary.
 *
 * @prop content rich text node in the contentful format
 *
 * @returns jsx corresponding to the rich text element
 */
function RichText({ content }) {
    // content has these properties:
    // 1. nodeType - determines the type of the current node
    // 2. content - array of children
    // 3. marks? - formatting information like bold or italic text

    const children = content.content?.map((child) =>
        RichText({ content: child })
    );

    // maps rich text marks(keys) to CSS class names(values)
    // also is useful to catch any errors of "unknown mark" type, in case we missed something
    // for simplicity, class names are the same as mark names, but they could also be different
    const marksToClassMap = new Map([
        ["bold", "bold"],
        ["italic", "italic"],
        ["underline", "underline"],
    ]);

    // most cases are trivial - there is 1-1 mapping between nodeType and an HTML tag
    // first we handle these.
    const nodeTypeToTagMap = new Map([
        // this is guaranteed to be the top level node, so we return an article to serve as a top level container
        ["document", "article"],
        // H1 is reserved for top level heading of the entire HTML page for accessibility reasons, so maybe emitting this here
        // is a potential violation of this principle
        // the better idea might be to emit a heading 1 level lower, so heading-1 returns an <h2></h2>, heading-2 returns <h3></h3>, etc..
        ["heading-1", "h1"],
        ["heading-2", "h2"],
        ["heading-3", "h3"],
        ["paragraph", "p"],
        ["unordered-list", "ul"],
        ["ordered-list", "ol"],
        ["list-item", "li"],
        ["table-row", "tr"],
        ["table-cell", "td"],
        ["table-header-cell", "th"]
    ]);
    const NodeTag = nodeTypeToTagMap.get(content.nodeType);
    if (NodeTag) {
        return <NodeTag>{children}</NodeTag>;
    }

    // handle special cases
    if (content.nodeType === "text") {
        // formatting styles are inside the marks property
        const marks = content.marks;
        if (marks.length === 0) {
            // no marks, we just return a text fragment in this case.
            return <>{content.value}</>;
        }
        // marks is an array of formatting tags: bold, italic, underline
        const classes = marks
            .map((mark) => {
                let className = marksToClassMap.get(mark.type);
                if (className === undefined) {
                    console.error(
                        "Rich text mark not supported: ",
                        mark.type,
                        ", ignoring..."
                    );
                    // i want filter_map ...
                    className = "";
                }
                return className;
            })
            .join(" ");
        return <span className={classes}>{content.value}</span>;
    } else if (content.nodeType === "hyperlink") {
        return <a href={content.data.uri}>{children}</a>;
    } else if (content.nodeType === "table") {
        // this is a bit more complicated
        // rich text doesn't have nodes that correspond to <thead></thead> or <tbody></tbody> tags.
        // so we have to look into the first row and decide whether it's the head row by node types inside.
        const firstRowCellType = content.content[0]?.content[0]?.nodeType;
        if (firstRowCellType === "table-header-cell") {
            // we have a header in the first row
            return (
                <table>
                    <thead>{children[0]}</thead>
                    <tbody>{children.slice(1)}</tbody>
                </table>
            );
        }
        return (
            <table>
                <tbody>{children}</tbody>
            </table>
        );
    }
    
    console.error("unknown rich text node type, ", content.nodeType);
    return <></>;
}

export default RichText;
