let ingredientsDropdownArray = [];
console.log()
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
        ingredientList.className = 'ingredient';
        ingredientList.textContent = ingredient;
        ingredientsDropdown.appendChild(ingredientList);
    });
}

getIngredientsList(recipes);
displayIngredientsList();


let ingredientsFilterArray = ["Ananas"];