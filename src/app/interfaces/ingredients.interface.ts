export interface Ingredients {
    meals: Meal[];
}

export interface Meal {
    idIngredient:   string;
    strIngredient:  string;
    strDescription: null | string;
    strType:        null | string;
}