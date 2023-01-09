import './App.css';
import Header from './components/Header'
import Main from './components/Main';
import Footer from './components/Footer';
import Recipes from './components/Recipes';
import Recipe from './components/Recipe';
import data from './Data'
import {useEffect, useState} from 'react'
import { Route, Routes } from 'react-router';

function App() {

  
  const [recipes, setRecipes] = useState([]) // eslint-disable-line no-unused-vars

  useEffect(() => { 
    data.getEntries()
    .then(response => setRecipes(response.items))
    .catch(error => console.log(error))

  }, [])

  // console.log(recipes)
  return (
    <div className="App">
      <Header recipes={recipes} />
      <Routes>
        <Route path="/" exact element={<Main recipes={recipes}/>}/>
        <Route path="/category/:category_name" element={<Recipes recipes={recipes}/>} />
        <Route path="/recipe/:recipe_id" element={<Recipe recipes={recipes}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
