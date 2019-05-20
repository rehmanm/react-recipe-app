import React from "react";

import { Link } from "react-router-dom";


const Recipe = (props) => (
    <div  className="col-md-4" style={{marignBottom:"2rem"}}>
        <div className="recipes__box">
    
            <img className="recipe__box-img" src= {props.recipe.image_url} alt={props.recipe.title} />
            <div className="recipe__text">
                <h5 className="recipes__title">{
                        props.recipe.title.length < 20 ? `${props.recipe.title}` : `${props.recipe.title.substring(0, 20)}...`
                    }</h5>
                <p className="recipes__subtitle">Publisher: <span>{props.recipe.publisher}</span></p>
                
            </div>
            <button className="recipe__buttons"> 
                <Link 
                to={
                    { pathname: `/recipe/${props.recipe.recipe_id}`,
                        state: {activeRecipe: props.recipe}
                    }
                }
                
                >View Recipe</Link>
            </button>
        </div>
    </div>

);

export default Recipe;