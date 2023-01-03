   const client = require('contentful').createClient({
    space: 'mtjp1adh4yfh',
    accessToken: '3o4XsXdz9bndgQIjzV8QzAeu2c2qK18qaw9eT8sCvYA'
   })

   const getRecipes = () =>  client.getEntries()
   .then(response => response.items)

   export {getRecipes}