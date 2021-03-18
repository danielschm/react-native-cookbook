import RootStore from "./RootStore";
import {action, makeObservable, observable, override} from "mobx";
import Meal from "../screens/meal/Meal";

export class MealsStore {
    meals: Meal[] = [];
    _meals: Meal[] = [];
    filterText: string = "";
    rootStore: RootStore;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore
        makeObservable(this, {
            meals: observable,
            filterText: observable,
            setMeals: action,
            filter: action,
            clearFilter: action,
        })
    }

    setMeals(meals: Meal[]) {
        this._meals = meals;
        this.meals = this._meals;
    }

    filter(text: string) {
        if (text === "") {
            this.clearFilter();
        } else {
            this.filterText = text;
            this.meals = this._meals.filter(meal => {
                return meal.name.toLowerCase().includes(text.toLowerCase());
            });
        }
    }

    clearFilter() {
        this.filterText = "";
        this.meals = this._meals;
    }
}
