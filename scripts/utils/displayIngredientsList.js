let ingredientsDropdownArray = [];
function getIngredientsList(recipes) {
    recipes.forEach(recipe => {
        recipe.ingredients.forEach(item => {
            if(!ingredientsDropdownArray.includes(item.ingredient)) {
                ingredientsDropdownArray.push(item.ingredient);
            }
        });
    });
}
function displayIngredientsList() {
    // sort ingredients array
    ingredientsDropdownArray.sort((a, b) => {
        const nameA = a.toLowerCase();
        const nameB = b.toLowerCase();
        return nameA.localeCompare(nameB);
    });
    // create ingredients dropdown list
    const ingredientsDropdown = document.querySelector('.ingredients-container');
    ingredientsDropdownArray.forEach(ingredient => {
        // create ingredient list items
        const ingredientList = document.createElement('li');
        ingredientList.className = 'ingredient px-4 pb-3 hover:bg-[#FFD15B] hover:cursor-pointer hover:py-2 hover:mb-1 transition-all duration-300';
        ingredientList.textContent = ingredient;
        ingredientsDropdown.appendChild(ingredientList);
    });
}
getIngredientsList(recipes);
displayIngredientsList();
let ingredientsFilterArray = ["Ananas"];