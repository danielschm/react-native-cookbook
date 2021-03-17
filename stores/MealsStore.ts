import RootStore from "./RootStore";
import {action, makeObservable, observable, override} from "mobx";
import Meal from "../screens/meal/Meal";

export class MealsStore {
    meals: Meal[] = [];
    rootStore: RootStore;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore
        makeObservable(this, {
            meals: observable,
            setMeals: action
        })
    }

    setMeals(meals: Meal[]) {
        this.meals = meals;
    }
}
