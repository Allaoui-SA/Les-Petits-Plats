class Api {
    /**
     * 
     * @param {string} url 
     */
    constructor(url) {
        this._url = url
    }

    async get() {
        return fetch(this._url)
            .then(res => res.json())
            .then(res => res.recipes)
            .catch(err => console.log('an error occurs', err))
    }
    async getRecipesById(recipeId) {
        return fetch(this._url)
            .then(res => res.json())
            .then(res => res.recipes.find(item => item.id == recipeId))
            .catch(err => console.log('an error occurs', err))
    }
    async getRecipeMedia(recipeId) {
        return fetch(this._url)
            .then(res => res.json())
            .then(res => res.media.filter(item => item.recipeId == recipeId))
            .catch(err => console.log('an error occurs', err))
    }
}


class RecipeApi extends Api {
    /**
     * 
     * @param {string} url 
     */
    constructor(url) {
        super(url)
    }

    async getRecipes() {
        return await this.get()
    }
}
class MediaApi extends Api {
    /**
     * 
     * @param {string} url 
     */
    constructor(url) {
        super(url)
    }

    async getMedias() {
        return (
            await this.getRecipeMedia(recipeId)
        )
    }
}
