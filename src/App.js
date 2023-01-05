import './App.css';
import data from './Data'
import {useEffect, useState} from 'react'

function App() {

  const [recipes, setRecipes] = useState([])

  useEffect(() => { 
    data.getEntries()
    .then(response => setRecipes(response.items))
    .catch(error => console.log(error))

  }, [])

  // console.log(recipes)
  return (
    <div className="App">
      <h1>CookBook</h1>
    </div>
  );
}

export default App;
