function sortRecipesByNames(recipes) {
  return recipes.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    return nameA.localeCompare(nameB);
  });
}

function filterRecipesByIngredient(recipes, ingredient) {
  return recipes.filter(recipe => {
    const ingredients = recipe.ingredients.map(ingredient => ingredient.ingredient.toLowerCase());
    return ingredients.includes(ingredient.toLowerCase());
  });
}


function resetRecipes() {
  const recipesContainer = document.querySelector('.main--content');
  recipesContainer.innerHTML = '';
}

document.querySelector('.test').addEventListener('click', () => {
    // sortRecipesByNames(recipes);
    let filteredRecipes = filterRecipesByIngredient(recipes, 'Lait de coco');
    resetRecipes();
    displayRecipes(filteredRecipes);
    console.log(filteredRecipes);
});