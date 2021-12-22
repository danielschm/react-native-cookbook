import {Meal, FullMeal, Step} from "./model/Meal";

const mockData = [
    new Meal({id: "42", name: "Gnocchi", length: "medium"}),
    new Meal({id: "15", name: "Spaghetti"}),
    new Meal({id: "14", name: "Burger"}),
    new Meal({id: "13", name: "Sushi"}),
    new Meal({id: "12", name: "Lasagne"}),
    new Meal({id: "11", name: "Pizzateig"}),
];

const mockData2 = [
    new FullMeal({
        id: "42",
        name: "Gnocchi",
        length: "medium",
        steps: [
            new Step(1, "Zwiebeln schneiden"),
            new Step(2, "Knoblauch würfeln"),
        ],
        ingredients: [
            new Step(1, "1 Zwiebel"),
            new Step(2, "1 Knoblauchzehe"),
            new Step(3, "800gr Gnocchi"),
        ]
    })
];

export class MealAPI {
    static getMeal(id: string): Promise<FullMeal> {
        console.log("Loading the meal");
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // const meal = Object.assign(mockData2.find(e => e.id === id) as FullMeal, {});
                const meal = mockData2[0];
                if (meal) {
                    resolve(meal);
                } else {
                    reject("Meal not found");
                }
            }, 100);
        });
    }

    static getMeals(): Promise<Meal[]> {
        console.log("Loading meals");
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(mockData);
            }, 100);
        });
    }

    static saveMeal(meal: Meal) {

    }
}