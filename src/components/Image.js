import {useState, useEffect} from 'react'
import axios from 'axios'

export default function Image ({id}) {

    const [image, setImage] = useState('')
    const [altText, setAltText] = useState('')
  
    useEffect(() => {

   
        axios
        .get(`https://cdn.contentful.com/spaces/mtjp1adh4yfh/environments/master/assets/${id}?access_token=3o4XsXdz9bndgQIjzV8QzAeu2c2qK18qaw9eT8sCvYA`)
        .then(response => {
            setImage(response.data.fields.file.url)
            setAltText(response.data.fields.description)
        })
        .catch(error => console.log(error))
    }, [id])
  

    
    return <>
        <img src={image} alt={altText}/>
        </>
}