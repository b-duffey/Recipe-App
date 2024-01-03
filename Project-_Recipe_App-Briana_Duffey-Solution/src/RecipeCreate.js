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
    if (!name || !cuisine || !photo || !ingredients || !preparation) {
      alert("Please fill out all fields prior to submission.");
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
        <textarea
          id="preparation"
          type="text"
          name="preparation"
          onChange={handlePreparationChange}
          value={preparation}
          placeholder="Preparation"
        />
      </div>

      <button type="submit" style={styles.button}>
        Create
      </button>
    </form>
  );
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "row",
    maxWidth: "100%",
    tableLayout: "fixed",
    width: "100%",
    borderCollapse: "collapse",
    overflow: "hidden",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff0c7", // Set the background color for odd rows
    

  },
  formGroup: {
    marginRight: "15px", // Adjust the margin between form groups
    marginBottom: "15px",
    marginTop: "10px",
    fontFamily: 'Rock Salt',

  },
  button: {
    alignSelf: "center",
    maxWidth: "150px",
    marginLeft: "75px",
  },
};

export default RecipeCreate;
