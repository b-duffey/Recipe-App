import React from "react";
import RecipeView from "./RecipeView";

function RecipeList({ recipes, deleteRecipe }) {
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
             <th>Image</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
           
          </tr>
        </thead>
        <tbody>
          {recipes.slice().map((recipe, index) => (
            <RecipeView
              deleteRecipe={() => deleteRecipe(index)}
              key={index}
              recipe={recipe}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
