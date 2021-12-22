import RootStore from "./RootStore";
import {action, makeObservable, observable} from "mobx";
import {Meal} from "../screens/meal/model/Meal";

export class MealsStore {
    meals: Meal[] = [];
    _meals: Meal[] = [];
    filterText: string = "";
    rootStore: RootStore;
    loading: boolean = false;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore
        makeObservable(this, {
            meals: observable,
            filterText: observable,
            loading: observable,
            setMeals: action,
            filter: action,
            clearFilter: action,
            setLoading: action
        })
    }

    setLoading(loading: boolean) {
        this.loading = loading;
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
