
import axios from 'axios'
import {useEffect, useState} from 'react'
import Image from './Image'
import RichText from './RichText'

export default function Data () {

   const [recipes, setRecipes] = useState([])

   useEffect(() => {
      axios
      .get('https://cdn.contentful.com/spaces/mtjp1adh4yfh/environments/master/entries?access_token=3o4XsXdz9bndgQIjzV8QzAeu2c2qK18qaw9eT8sCvYA')
      .then(response => setRecipes(response.data.items))
      .catch(error => console.log(error))
   }, [])
   
   console.log(recipes)

   return <>
   {recipes.map((recipe) => { 
      return (
         <div>
      <h2>{recipe.fields.title}</h2>
         <Image id={recipe.fields.picture.sys.id} />
         <h3>Creation steps:</h3>
         <RichText content={recipe.fields.creationSteps} />
         <h3>Ingredients:</h3>
         <RichText content={recipe.fields.ingredients} />
      </div>
      )
   })}
     
      </>
}