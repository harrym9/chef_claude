import "../styles/Main.css";
import ClaudeResponse from "./ClaudeResponse";
import IngredientsList from "./IngredientsList";
import React from "react";
import { getRecipeFromChefClaude } from "../../ai.js";

export default function Main() {
  //STATES
  const [ingredients, setIngredients] = React.useState([]);
  const [recipe, setRecipe] = React.useState([]);

  // ARROW FUNCTIONS
  async function getRecipe() {
    const response = await getRecipeFromChefClaude(ingredients)
    setRecipe(response);
  }

  const handleSubmit = (formData) => {
    const newIngredient = formData.get("ingredient");
    newIngredient && setIngredients([...ingredients, newIngredient]);
  };

  return (
    <main>
      <form className="addIngredientForm" action={handleSubmit}>
        <input type="text" name="ingredient" placeholder="e.g oregano" />
        <button>Add a recipe</button>
      </form>
      {ingredients.length > 0 && (
        <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
      )}

      {recipe ? <ClaudeResponse recipe={recipe} /> : undefined}
    </main>
  );
}
