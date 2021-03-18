import Meal from "./Meal";

const mockData = [
    new Meal("42", "Gnocchi"),
    new Meal("15", "Spaghetti"),
    new Meal("14", "Burger"),
    new Meal("13", "Sushi"),
    new Meal("12", "Lasagne"),
    new Meal("11", "Pizzateig"),
];

export default class MealAPI {
    static getMeal(id: string): Promise<Meal> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const meal = mockData.find(e => e.id === id);
                if (meal) {
                    resolve(meal);
                } else {
                    reject("Meal not found");
                }
            }, 100);
        });
    }

    static getMeals(): Promise<Meal[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(mockData);
            }, 100);
        });
    }
}