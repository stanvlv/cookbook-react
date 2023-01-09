import { createClient } from "contentful";

// experimented with hiding in .env file
const data = createClient({
  space: "mtjp1adh4yfh", //process.env.REACT_APP_NOTASECRET_SPACE_ID,
  accessToken: "3o4XsXdz9bndgQIjzV8QzAeu2c2qK18qaw9eT8sCvYA", //process.env.REACT_APP_NOTASECRET_ACCESS_TOKEN
});

export default data;
