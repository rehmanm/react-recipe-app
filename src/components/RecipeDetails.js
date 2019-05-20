import React, {useState, useEffect} from "react";


const RecipeDetails = (props) => {

    const [activeRecipe, setActiveRecipe] = useState(
        []
      );

      useEffect(() => {
        console.log(`Active Recipe: ${activeRecipe}`);
      });

      return (
            <div>Recipe Details

        {
            console.log(props)
        }
            </div>
      );
    
}

export default RecipeDetails;