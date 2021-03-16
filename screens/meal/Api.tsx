import Meal from "./Meal";

const mockData = [
    new Meal("42", "Gnocchi"),
    new Meal("10", "Spaghetti")
];

export default class MealAPI {
    static getMeal(id: string): Meal {
        return mockData.find(e => e.id === id)!;
    }

    static getMeals(): Meal[] {
        return mockData;
    }
}