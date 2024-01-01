import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  const createRecipe = (newRecipe) =>
    setRecipes((currentRecipes) => [...currentRecipes, newRecipe]);

  const deleteRecipe = (indexToDelete) =>
    setRecipes((currentRecipes) =>
      currentRecipes.filter((recipe, index) => index !== indexToDelete)
    );

  return (
    <div className="App">
      <header style={styles.header}>Delicious Food Recipes</header>
      <RecipeList deleteRecipe={deleteRecipe} recipes={recipes} />
      <RecipeCreate createRecipe={createRecipe} />
    </div>
  );
}

const styles = {
  header: {
    fontFamily: "'Playfair Display SC', serif",
    fontSize: "64px",
    textAlign: "center",
  },
};

export default App;
