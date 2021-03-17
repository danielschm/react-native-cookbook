import RootStore from "./RootStore";
import {action, makeObservable, observable} from "mobx";
import Meal from "../screens/meal/Meal";

export class CurrentMealStore {
    meal: Meal = Meal.create();
    rootStore: RootStore;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore
        makeObservable(this, {
            meal: observable,
            setMeal: action
        })
    }

    setMeal(meal: Meal) {
        this.meal = meal;
    }
}
