import {Meal, FullMeal, Step} from "./model/Meal";

const withDatabase = true;

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
            new Step(0,1, "Zwiebeln schneiden"),
            new Step(0, 2, "Knoblauch würfeln"),
        ],
        ingredients: [
            new Step(0, 1, "1 Zwiebel"),
            new Step(0, 2, "1 Knoblauchzehe"),
            new Step(0, 3, "800gr Gnocchi"),
        ]
    })
];

const serverData = [
    {
        "id": 52,
        "name": "Pizza",
        "length": "short",
        "recipe": "",
        "picture": "",
        "ingredients": [
            {
                "idMapping": 1,
                "name": "Mehl",
                "count": 1,
                "unit": "Stück"
            },
            {
                "idMapping": 2,
                "name": "Tomate",
                "count": 1,
                "unit": "Stück"
            }
        ],
        "tags": []
    }
];


export class MealAPI {
    static async getMeal(id: string): Promise<FullMeal> {
        if (!withDatabase) {
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

        const response = await fetch("http://192.168.178.28:8081/api/meal/" + id);
        const json = await response.json();

        //@ts-ignore
        return new FullMeal({
            id: json.id,
            name: json.name,
            length: json.length,
            //@ts-ignore
            ingredients: json.ingredients.map((e, i) => {
                return new Step(e.idMapping, i, e.name);
                // return new Step(e.idMapping, i, `${e.count} ${e.unit} ${e.name}`);
            })
        });
    }

    static async getMeals(): Promise<Meal[]> {
        if (!withDatabase) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(mockData);
                }, 100);
            });
        }

        const response = await fetch("http://192.168.178.28:8081/api/meal");
        const json = await response.json();

        //@ts-ignore
        const meals = json.map(mealData => {
            return new Meal({
                id: mealData.id,
                name: mealData.name,
                length: mealData.length
            });
        });

        return meals;
    }

    static createMeal(meal: Meal) {
        fetch("http://192.168.178.28:8081/api/meal", {
            method: "POST",
            headers: {
                Accept: "*/*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(meal)
        }).catch(err => {
            console.log(err);
        });
    }

    static updateMeal(meal: Meal) {
        fetch("http://192.168.178.28:8081/api/meal", {
            method: "PATCH",
            headers: {
                Accept: "*/*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(meal)
        }).catch(err => {
            console.log(err);
        });
    }
}