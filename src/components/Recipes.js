import React from "react";

import Recipe from "./Recipe"; 

const Recipes = (props) => (
    
    <div className="containter">  
        <div className="row">
        {
            props.recipes.map((recipe)=>{
            return <Recipe recipe = {recipe} key={recipe.recipe_id} />
            })
        }
        </div>
    </div>
);

export default Recipes;