import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const handleNameChange = (event) => setName(event.target.value);
  const handleCuisineChange = (event) => setCuisine(event.target.value);
  const handlePhotoChange = (event) => setPhoto(event.target.value);
  const handleIngredientsChange = (event) => setIngredients(event.target.value);
  const handlePreparationChange = (event) => setPreparation(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !cuisine || !photo || !ingredients || !preparation){
      alert("Please fill out all fields prior to submission.")
      return;
    }
    createRecipe({ name, cuisine, photo, ingredients, preparation });
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  };

  return (
    <form name="create" onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.formGroup}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          onChange={handleNameChange}
          value={name}
          placeholder="Name"
        />
      </div>

      <div style={styles.formGroup}>
        <label htmlFor="cuisine">Cuisine:</label>
        <input
          id="cuisine"
          type="text"
          name="cuisine"
          onChange={handleCuisineChange}
          value={cuisine}
          placeholder="Cuisine"
        />
      </div>

      <div style={styles.formGroup}>
        <label htmlFor="photo">Photo URL:</label>
        <input
          id="photo"
          type="text"
          name="photo"
          onChange={handlePhotoChange}
          value={photo}
          placeholder="Photo"
        />
      </div>

      <div style={styles.formGroup}>
        <label htmlFor="ingredients">Ingredients:</label>
        <textarea
          id="ingredients"
          type="text"
          name="ingredients"
          onChange={handleIngredientsChange}
          value={ingredients}
          placeholder="Ingredients"
        />
      </div>

      <div style={styles.formGroup}>
        <label htmlFor="preparation">Preparation:</label>
        <textarea
          id="preparation"
          type="text"
          name="preparation"
          onChange={handlePreparationChange}
          value={preparation}
          placeholder="Preparation"
        />
      </div>

      <button type="submit" style={styles.button}>Create</button>
    </form>
  );
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "100%",
  },
  formGroup: {
    marginRight: "15px", // Adjust the margin between form groups
    marginBottom: "15px",
  },
  button: {
    maxWidth: "150px",
  },
};

export default RecipeCreate;
