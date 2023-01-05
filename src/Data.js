import { createClient } from 'contentful'

// experimented with hiding in .env file 
const data = createClient({
      space: process.env.REACT_APP_NOTASECRET_SPACE_ID,
      accessToken: process.env.REACT_APP_NOTASECRET_ACCESS_TOKEN
})

export default data