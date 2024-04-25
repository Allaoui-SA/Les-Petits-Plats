let Filters = {"ingredients": ingredientsArray, "ustensiles": ustensilsArray, "appareils": appliancesArray}


document.addEventListener('click', (e) => {
    let li = e.target;
    if (li.classList.contains('dropdownItem')) {
        
        function manageFilters() {
        
            // Remove item from array
            function removeFromArray(item, array) {
                const index = array.indexOf(item);
                if (index > -1) {
                    array.splice(index, 1);
                }
            }
            
            function filterRecipesByAll() {
                return recipes.filter(recipe => {
                    const recipeIngredients = recipe.ingredients.map(ingredient => ingredient.ingredient.toLowerCase());
                    const recipeAppliances = recipe.appliance.toLowerCase();
                    const recipeUstensils = recipe.ustensils.map(ustensil => ustensil.toLowerCase());
                    return ingredientsArray.every(ingredient => recipeIngredients.includes(ingredient.toLowerCase())) && appliancesArray.every(appliance => recipeAppliances.includes(appliance.toLowerCase())) && ustensilsArray.every(ustensil => recipeUstensils.includes(ustensil.toLowerCase()));
                });
            }

            function listOtherAll() {
                let filteredRecipes = filterRecipesByAll();
                const otherIngredients = [];
                const otherAppliances = [];
                const otherUstensils = [];

                // Loop through each recipe
                filteredRecipes.forEach(recipe => {
                    // Check if the recipe contains all the selected ingredients
                    if (ingredientsArray.every(ingredient => recipe.ingredients.some(item => item.ingredient === ingredient))) {
                        // Loop through each ingredient in the recipe
                        recipe.ingredients.forEach(item => {
                            const ingredient = item.ingredient;
                            // Check if the ingredient is not in the selected ingredients array
                            if (!ingredientsArray.includes(ingredient) && !otherIngredients.includes(ingredient)) {
                                otherIngredients.push(ingredient);
                                // Sort dropdownArray
                                otherIngredients.sort((a, b) => {
                                    const nameA = a.toLowerCase();
                                    const nameB = b.toLowerCase();
                                    return nameA.localeCompare(nameB);
                                });
                            }
                            
                        });
                    }
                    console.log(otherIngredients);
                    // Check if the recipe contains all the selected appliances
                    if (appliancesArray.every(appliance => recipe.appliance == appliance)) {
                        // Loop through each appliance in the recipe
                            const appliance = recipe.appliance;
                            // Check if the appliance is not in the selected appliances array
                            if (!appliancesArray.includes(appliance) && !otherAppliances.includes(appliance)) {
                                otherAppliances.push(appliance);

                                // Sort dropdownArray
                                otherAppliances.sort((a, b) => {
                                    const nameA = a.toLowerCase();
                                    const nameB = b.toLowerCase();
                                    return nameA.localeCompare(nameB);
                                });
                            }
                        
                    }
                    // Check if the recipe contains all the selected ustensils
                    if (ustensilsArray.every(ustensil => recipe.ustensils.includes(ustensil))) {
                        // Loop through each ustensil in the recipe
                        recipe.ustensils.forEach(item => {
                            const ustensil = item;
                            // Check if the ustensil is not in the selected ustensils array
                            if (!ustensilsArray.includes(ustensil) && !otherUstensils.includes(ustensil)) {
                                otherUstensils.push(ustensil);

                                // Sort dropdownArray
                                otherUstensils.sort((a, b) => {
                                    const nameA = a.toLowerCase();
                                    const nameB = b.toLowerCase();
                                    return nameA.localeCompare(nameB);
                                });
                            }
                            
                        });
                    }
                });

                // Update the dropdowns li innerHtml
                const ingredientsDropdown = document.querySelector('.ingredients-container');
                ingredientsDropdown.innerHTML = '';
                const appliancesDropdown = document.querySelector('.appliances-container');
                appliancesDropdown.innerHTML = '';
                const ustensilsDropdown = document.querySelector('.ustensils-container');
                ustensilsDropdown.innerHTML = '';

                // Create li elements for selected ingredients and the other ingredients, appliances and other appliances, ustensils and other ustensils
                function createLiElements(array, container) {
                    array.forEach(item => {
                        const li = document.createElement('li');
                        li.textContent = item;
                        li.className = 'dropdownItem px-4 pb-3 hover:bg-[#FFD15B] hover:cursor-pointer hover:py-2 hover:mb-1 transition-all duration-300 selected';
                        container.appendChild(li);
                    });
                }
                function createLiOtherElements(array, container) {
                    array.forEach(item => {
                        const li = document.createElement('li');
                        li.textContent = item;
                        li.className = 'dropdownItem px-4 pb-3 hover:bg-[#FFD15B] hover:cursor-pointer hover:py-2 hover:mb-1 transition-all duration-300';
                        container.appendChild(li);
                    });
                }
                createLiElements(ingredientsArray, ingredientsDropdown);
                createLiOtherElements(otherIngredients, ingredientsDropdown);
                createLiElements(appliancesArray, appliancesDropdown);
                createLiOtherElements(otherAppliances, appliancesDropdown);
                createLiElements(ustensilsArray, ustensilsDropdown);
                createLiOtherElements(otherUstensils, ustensilsDropdown);
            }

            
            function resetRecipes() {
                const recipesContainer = document.querySelector('.main--content');
                recipesContainer.innerHTML = '';
            }
            
            const parentUl = li.closest('ul');

            // Check if the list item has a parent ul
            if (parentUl) {
                const item = li.textContent.trim();

                // Check if the list item is selected
                if (li.classList.contains('selected')) {
                    li.classList.remove('selected');
                    li.classList.add('unselected');

                    // Remove item from the appropriate array
                    if (parentUl.classList.contains('ingredients-container')) {
                        removeFromArray(item, ingredientsArray);
                        console.log(ingredientsArray);
                    } else if (parentUl.classList.contains('appliances-container')) {
                        removeFromArray(item, appliancesArray);
                        console.log(appliancesArray);
                    } else if (parentUl.classList.contains('ustensils-container')) {
                        removeFromArray(item, ustensilsArray);
                        console.log(ustensilsArray);
                    }
                    // return the recipe that contains the ingredients

                    // let filteredRecipes = filterRecipesByAll();
                    // let filteredRecipes = filterRecipesByIngredients();
                    resetRecipes();
                    listOtherAll();
                    // listOtherIngredients();
                    displayRecipes(filterRecipesByAll());
                    console.log(filterRecipesByAll());
                } else {
                    li.classList.add('selected');
                    li.classList.remove('unselected');

                    // Add item to the appropriate array
                    if (parentUl.classList.contains('ingredients-container')) {
                        ingredientsArray.push(item);
                        console.log(ingredientsArray);
                    } else if (parentUl.classList.contains('appliances-container')) {
                        appliancesArray.push(item);
                        console.log(appliancesArray);
                    } else if (parentUl.classList.contains('ustensils-container')) {
                        ustensilsArray.push(item);
                        console.log(ustensilsArray);
                    }
                    // return the recipe that contains the ingredients

                    
                    // let filteredRecipes = filterRecipesByIngredients();
                    resetRecipes();
                    listOtherAll();
                    // listOtherIngredients();
                    displayRecipes(filterRecipesByAll());
                    console.log(filterRecipesByAll());
                }
            }
        
            
        }
        
        manageFilters();

    }
});






