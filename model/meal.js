class Meal {
    constructor(
        id,
        CategoryIds,
        title,
        affordability,
        complexity,
        imageUrl,
        duration,
        ingrediants,
        steps,
        isGlutenFree,
        isVegan,
        isVegetarian,
        isLactoseFree
    ) {
        this.id = id;
        this.CategoryIds = CategoryIds;
        this.title = title;
        this.affordability = affordability;
        this.complexity = complexity;
        this.imageUrl = imageUrl;
        this.duration = duration;
        this.ingrediants = ingrediants;
        this.steps = steps;
        this.isGlutenFree = isGlutenFree;
        this.isVegan = isVegan;
        this.isVegetarian = isVegetarian;
        this.isLactoseFree = isLactoseFree
    }
}

export default Meal;