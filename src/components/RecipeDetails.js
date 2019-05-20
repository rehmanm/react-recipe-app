import React, {useState, useEffect} from "react";

import {Link} from "react-router-dom";

const RecipeDetails = (props) => {

    const [activeRecipe, setActiveRecipe] = useState(
        []
      );

      useEffect(() => {
          setActiveRecipe(props.location.state.activeRecipe);
        console.log(`Active Recipe: ${activeRecipe}`);
      });

      return (
            <div className="container">
                <div className="active-recipe">
                    <img className="active=recipe__image" src={activeRecipe.image_url} alt={activeRecipe.title}/>
                    <h3 className="active-recipe__title">{activeRecipe.title}</h3>
                    <h4 className="active-recipe__publisher">
                        Publisher: <span>{activeRecipe.publisher}</span>
                    </h4>
                    <p className="active-recipe__website">
                    <span><a href={activeRecipe.publisher_url} >{activeRecipe.publisher_url}</a></span>
                    </p>
                    <button className="active-recipe__button">
                    <Link to={
                    { pathname: `/`}
                    
                    }>
                        Go Home
                    </Link>
                    </button>
                </div>
            </div>  
      );
    
}

export default RecipeDetails;