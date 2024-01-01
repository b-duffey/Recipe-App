import React from "react";

function RecipeView({ recipe, deleteRecipe }) {
  return (
    <tr style={styles.recipeContainer}>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
       <td style={styles.imageContainer}>
        <img src={recipe.photo} alt={recipe.name} style={styles.recipeImage} />
      </td>
      <td className="content_td">
        <p>{recipe.ingredients}</p>
      </td>
      <td className="content_td" style={styles.prepRow}>
        <p>{recipe.preparation}</p>
      </td>
     
      <td>
        <button name="delete" onClick={deleteRecipe}>
          Delete
        </button>
      </td>
      
    </tr>
  );
}

const styles = {
  recipeContainer: {
    border: "1px solid #ccc",
    marginBottom: "10px",
  },
  prepRow: {
    maxHeight: "150px",
    overflowY: "auto",
  },
  imageContainer: {
    marginTop: "10px",
  },
  recipeImage: {
    width: "100%",
    height: "auto",
    maxWidth: "300px",
    objectFit: "scale-down",
  },
};

export default RecipeView;
