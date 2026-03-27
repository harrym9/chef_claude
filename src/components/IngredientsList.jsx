export default function IngredientsList({ ingredients, getRecipe }) {
  //MAPPING ARRAY
  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  return (
    <section className="ingredientsList">
      <h2>Ingredients on hand:</h2>
      <ul>{ingredientsListItems}</ul>
      {ingredients.length > 3 && (
        <div className="getRecipeContainer">
          <div>
            <h1>Ready for a recipe</h1>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={getRecipe}>Get a recipe</button>
        </div>
      )}
    </section>
  );
}
{
}
