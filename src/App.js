import './App.css';
import { getRecipes } from './components/Api';
import {useEffect, useState} from 'react'

function App() {

  // on loading of the page we fetch the data and 
  // save it in the state of recipes line 10-17

  const [recipes, setRecipes] = useState([])

  const promise = getRecipes()

  useEffect(() => {
    promise.then(recipe => setRecipes(recipe))
    .catch(e => alert(e))
  }, [])
  // to see it - console.log(recipes)

  return (
    <div className="App">
      <h1>CookBook</h1>
    </div>
  );
}

export default App;
