let ingredientsArray = []
let ustensilsArray = []
let appliancesArray = []

function createDropdownList(items, containerSelector) {
    const dropdownArray = [];

    // Populate dropdownArray
    items.forEach(item => {
        if(!dropdownArray.includes(item)) {
            dropdownArray.push(item);
        }
    });

    // Sort dropdownArray
    dropdownArray.sort((a, b) => {
        const nameA = a.toLowerCase();
        const nameB = b.toLowerCase();
        return nameA.localeCompare(nameB);
    });

    // Create dropdown list
    const dropdownContainer = document.querySelector(containerSelector);
    dropdownArray.forEach(item => {
        const listItem = document.createElement('li');
        listItem.className = 'dropdownItem px-4 pb-3 hover:bg-[#FFD15B] hover:cursor-pointer hover:py-2 hover:mb-1 transition-all duration-300';
        listItem.textContent = item;
        dropdownContainer.appendChild(listItem);

        // Managing 'selected' class on list items
        
    });
    // console.log(dropdownArray);
}

createDropdownList(recipes.map(recipe => recipe.ingredients).flat().map(ingredient => ingredient.ingredient), '.ingredients-container');
createDropdownList(recipes.map(recipe => recipe.appliance), '.appliances-container');
createDropdownList(recipes.map(recipe => recipe.ustensils).flat(), '.ustensils-container');

