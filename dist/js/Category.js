const titleCategory = document.querySelector("#Category-title")
const descriptionCategory = document.querySelector("#Category-Description")
const addCategoryBbn = document.querySelector("#btn-add")

export default class CategoryViwe {
    constructor() {
        addCategoryBbn.addEventListener("click", (e) => this.addNewCategory(e))
    }
    addNewCategory(e) {
     
    }
}