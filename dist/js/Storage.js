const categores = [{
        id: 1,
        title: "Front-end",
        description: "front if Application ",
        CreateAt: '1758-12-17T03:24:00'
    },
    {
        id: 2,
        title: "back-end",
        description: "front if Application ",
        CreateAt: '1995-12-17T03:24:00'
    },
    {
        id: 3,
        title: "Front-end",
        description: "front if Application ",
        CreateAt: '2002-12-17T03:24:00'
    }
]

export default class Storage {
    static getAllCategories() {
        const saveCategories = JSON.parse(localStorage.getItem("category")) || []
        const sortedCategories = saveCategories.sort((a, b) => {
            return new Date(a.CreateAt) > new Date(b.CreateAt) ? -1 : 1;
        })
        return sortedCategories
    }
    static saveCategory(categoryToSave) {
        const saveCategories = Storage.getAllCategories();
        const existedItem = saveCategories.find((c) => c.id == categoryToSave.id)
        if (existedItem) {
            existedItem.title = categoryToSave.title;
            existedItem.description = categoryToSave.description
        } else {
            categoryToSave.id = new Date().getTime()
            categoryToSave.CreateAt = new Date().toISOString()
            saveCategories.push(categoryToSave)
        }
        localStorage.setItem("category", JSON.stringify(saveCategories))

    }
    static getAllProduct() {
        const saveProducts = JSON.parse(localStorage.getItem("Product")) || []
        const sortedProducts = saveProducts.sort((a, b) => {
            return new Date(a.CreateAt) > new Date(b.CreateAt) ? -1 : 1;
        })
        return sortedProducts
    }
    static saveProduct(productToSave) {
        const saveProducts = Storage.getAllProducts();
        const existedItem = saveProducts.find((c) => c.id == productToSave.id)
        if (existedItem) {
            existedItem.title = productToSave.title;
            existedItem.quantity = productToSave.quantity
            existedItem.category = productToSave.category
        } else {
            productToSave.id = new Date().getTime()
            productToSave.CreateAt = new Date().toISOString()
            saveProducts.push(productToSave)
        }
        localStorage.setItem("Product", JSON.stringify(saveProducts))

    }
}