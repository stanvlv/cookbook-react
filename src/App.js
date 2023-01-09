import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import data from "./Data";
import { useEffect, useState } from "react";

function App() {
  const [recipes, setRecipes] = useState([]); // eslint-disable-line no-unused-vars

  useEffect(() => {
    data
      .getEntries()
      .then((response) => setRecipes(response.items))
      .catch((error) => console.log(error));
  }, []);

  // console.log(recipes)
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
