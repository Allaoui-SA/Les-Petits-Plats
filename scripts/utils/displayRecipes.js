function displayRecipes(recipes) {
    const mainContentContainer = document.querySelector('.main--content');

    // get recipes from local storage
    recipes.forEach(recipe => {
        
        // create recipe container
        const recipeDiv = document.createElement('div');
        recipeDiv.className = 'recipe bg-white rounded-3xl';
        
        // create recipe image
        const recipeImage = document.createElement('img');
        recipeImage.src = "./assets/photos/"+recipe.image;
        recipeImage.alt = recipe.name;
        recipeImage.className = 'mb-8 h-64 w-full object-cover object-center border-b rounded-t-3xl';

        // create recipe text container
        const recipeText = document.createElement('div');
        recipeText.className = 'px-6 pb-6';
      
        // create recipe title
        const recipeTitle = document.createElement('h3');
        recipeTitle.textContent = recipe.name;
        recipeTitle.className = 'mb-8 text-lg';

        // create title for recipe description
        const descriptionHeading = document.createElement('h4');
        descriptionHeading.textContent = 'recette';
        descriptionHeading.className = 'mb-4 uppercase';
        
        // create recipe description
        const recipeDescription = document.createElement('p');
        recipeDescription.textContent = recipe.description;
        recipeDescription.className = 'mb-8 text-ellipsis line-clamp-4';
        
        // create title for recipe ingredients
        const ingredientsHeading = document.createElement('h4');
        ingredientsHeading.textContent = 'ingrédients';
        ingredientsHeading.className = 'mb-4 uppercase';

        // create recipe ingredients container
        const recipeIngredients = document.createElement('div');
        recipeIngredients.className = 'flex flex-wrap';
        
        // create recipe ingredients
        recipe.ingredients.forEach(item => {
            
            // create ingredient container
            const ingredientDiv = document.createElement('div');
            ingredientDiv.className = 'w-1/2';
            
            // create ingredient name
            const ingredientName = document.createElement('p');
            ingredientName.textContent = item.ingredient;
            ingredientName.className = 'mb-[1px] font-medium';
            
            // create ingredient quantity
            const ingredientQuantity = document.createElement('p');
            // check if unit is null
            if(item.unit == null) item.unit = '';
            ingredientQuantity.textContent = item.quantity+' '+item.unit;
            ingredientQuantity.className = 'mb-2 font-normal text-gray-500';
            
            // append elements to ingredient container
            ingredientDiv.appendChild(ingredientName);
            ingredientDiv.appendChild(ingredientQuantity);

            // append ingredient container to recipe ingredients container
            recipeIngredients.appendChild(ingredientDiv);
        });
  
        // append elements to recipe text container
        recipeText.appendChild(recipeTitle);
        recipeText.appendChild(descriptionHeading);
        recipeText.appendChild(recipeDescription);
        recipeText.appendChild(ingredientsHeading);
        recipeText.appendChild(recipeIngredients);
        
        // append elements to recipe container
        recipeDiv.appendChild(recipeImage);
        recipeDiv.appendChild(recipeText);
      
        // append recipe container to main content container
        mainContentContainer.appendChild(recipeDiv);

    });
}


displayRecipes(recipes);