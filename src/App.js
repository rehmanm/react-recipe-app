import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import Form from "./components/Form";
import Recipes from "./components/Recipes";

const API_KEY = "988f9635ae1ab802b6757e9ab4e9efbb";




function App() {

  const [recipes, setRecipes] = useState(
    []
  );

  async function getRecipe(e) {
    e.preventDefault();

    const recipeName = e.target.elements.recipeName.value;
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`);
    const data = await api_call.json();
    //Setting State of Recipes
    setRecipes(data.recipes);
 

  }
  return (
    <div className="App">
      <header className="App-header">
         <h1 className="App-title">Recipe Search</h1>
      </header>
      <Form  getRecipe= {getRecipe}/>
      <Recipes recipes = {recipes} />
      
    </div>
  );
}

export default App;
