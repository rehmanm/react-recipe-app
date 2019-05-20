import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

import Form from "./components/Form";
import Recipes from "./components/Recipes";

const API_KEY = "988f9635ae1ab802b6757e9ab4e9efbb";




function App() {

  const [recipes, setRecipes] = useState(
    []
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("recipes")!=null && !mounted){
      console.log("component did mount")
      const json= localStorage.getItem("recipes");
      setRecipes(JSON.parse(json)); 
      setMounted(true);
    } else {
      const recipesData = JSON.stringify(recipes);
      localStorage.setItem("recipes", recipesData);
      console.log("component did update");
    }
    
 
  });

  async function getRecipe(e) {
    e.preventDefault();

    const recipeName = e.target.elements.recipeName.value;
    /*
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`);
    const data = await api_call.json();
    */
    const data = {"count": 5, "recipes": [{"publisher": "BBC Good Food", "f2f_url": "http://food2fork.com/view/495802", "title": "Chicken cacciatore", "source_url": "http://www.bbcgoodfood.com/recipes/4251/chicken-cacciatore", "recipe_id": "495802", "image_url": "http://static.food2fork.com/4251_MEDIUM71f0.jpg", "social_rank": 99.99999994031722, "publisher_url": "http://www.bbcgoodfood.com"}, {"publisher": "All Recipes", "f2f_url": "http://food2fork.com/view/1481", "title": "Apple Stuffed Chicken Breast", "source_url": "http://allrecipes.com/Recipe/Apple-Stuffed-Chicken-Breast/Detail.aspx", "recipe_id": "1481", "image_url": "http://static.food2fork.com/8530b681.jpg", "social_rank": 99.99999555168424, "publisher_url": "http://allrecipes.com"}, {"publisher": "All Recipes", "f2f_url": "http://food2fork.com/view/2425", "title": "Baked Chicken Nuggets", "source_url": "http://allrecipes.com/Recipe/Baked-Chicken-Nuggets/Detail.aspx", "recipe_id": "2425", "image_url": "http://static.food2fork.com/9880830335.jpg", "social_rank": 99.99992455567956, "publisher_url": "http://allrecipes.com"}, {"publisher": "Closet Cooking", "f2f_url": "http://food2fork.com/view/35611", "title": "Strawberry and Balsamic Grilled Chicken Salad", "source_url": "http://www.closetcooking.com/2012/05/strawberry-and-balsamic-grilled-chicken.html", "recipe_id": "35611", "image_url": "http://static.food2fork.com/Strawberry2Band2BBalsamic2BGrilled2BChicken2BSalad2B5002B05455fa48e36.jpg", "social_rank": 99.99975934380963, "publisher_url": "http://closetcooking.com"}, {"publisher": "A Spicy Perspective", "f2f_url": "http://food2fork.com/view/bf5134", "title": "Vietnamese Banh Mi Salad", "source_url": "http://www.aspicyperspective.com/2013/01/vietnamese-chicken-salad.html", "recipe_id": "bf5134", "image_url": "http://static.food2fork.com/IMG_28181180x1807551.jpg", "social_rank": 99.99896179226475, "publisher_url": "http://www.aspicyperspective.com"}]}

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
