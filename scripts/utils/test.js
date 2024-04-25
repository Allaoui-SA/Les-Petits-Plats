const recipes = ['recette1', "recette2"]


let ingredients = {"lait de coco": None, "tomate": None, "Citron":None}
let ustensiles = {}
let appareils = {}

let Filters = {"ingredients": ["Lait", "Tomate"], "ustensiles": [], "appareils": []}


updateFilterButton(){
    let buttonIngredients = document.getElementById('buttonIngredients')
    buttonIngredients.clear()
    for(let ingredient in ingredients){
    let buttonIngredients = document.getElementById('buttonIngredients')
        addFilterIntoButton(buttonIngredients, ingredient)
    }

    let buttonUstensiles = document.getElementById('buttonUstensiles')
    buttonUstensiles.clear()
    for(let ustensile in ustensiles){
    let buttonIngredients = document.getElementById('buttonUstensiles')
        addFilterIntoButton(buttonUstensiles, ustensile)
    }
}

addFilterIntoButton(parent, element){
    let puce = document.createElement('li')
    puce.content = element
    parent.appendChild(puce)
    puce.addEventListener('click', ()=> return )
}

function setFilters(listRecipes){
    ingredients = {}
    for(let recette of listRecipes){
        for(let ingredient of recette.ingredients){
            ingredients[recette.ingredients] = None;
        }
        for(let appareils of recette.appliance){
            ingredients[recette.appliance] = None;
        }
    }
}

function getRecipes(filters){
    let newRecipes= []
    for(let recipe of recipes){
        let isOk = True
        for(let filterIngredient of Filters.ingredients){
            if (!filterIngredient in recipe.ingredients){
                isOk = False
                break
            }
        }
        if (!isOk) continue
        for(let filterAppliance of Filters.appliance){
            if(!filterAppliance in recipe.applaince){
                recipe = False
                break
            }
        }
        if (!isOk) continue
        if(isOk) newRecipes.push(recipe)
        return newRecipes
    }
}


setFilters(recipes)
updateFilterButton()

setFilters(getRecipes(filters))
