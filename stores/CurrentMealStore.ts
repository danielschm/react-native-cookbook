import RootStore from "./RootStore";
import {action, makeObservable, observable} from "mobx";
import {FullMeal, Step} from "../screens/meal/model/Meal";

export class CurrentMealStore {
    meal: FullMeal = FullMeal.create();
    _meal: FullMeal = FullMeal.create();
    ingredients: Step[] = [];
    steps: Step[] = [];
    lengthIndex: 0 | 1 | 2 = 0;
    changed: boolean = false;
    loaded: boolean = false;
    currentIngredient: string = "";
    currentStep: string = "";
    rootStore: RootStore;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore
        makeObservable(this, {
            meal: observable,
            ingredients: observable,
            steps: observable,
            changed: observable,
            loaded: observable,
            lengthIndex: observable,
            currentIngredient: observable,
            currentStep: observable,
            setMeal: action,
            setName: action,
            setLoaded: action,
            setLengthByIndex: action,
            setCurrentIngredient: action,
            setCurrentStep: action,
            updateIngredients: action,
            updateSteps: action,
            removeIngredient: action,
            removeStep: action,
            reset: action,
            resetChanges: action,
            saveChanges: action,
            addCurrentIngredientToMeal: action
        })
    }

    setLoaded(loaded: boolean) {
        this.loaded = loaded;
    }

    reset() {
        this.loaded = false;
        this.changed = false;
    }

    resetChanges() {
        this.changed = false;
        this.meal = Object.assign(this._meal, {});
    }

    saveChanges() {
        this.changed = false;
        this._meal = Object.assign(this.meal, {});
    }

    setMeal(meal: FullMeal) {
        this.meal = meal;
        this._meal = Object.assign(meal, {});
        this.lengthIndex = this.getLengthIndex(meal);
        this.updateIngredients();
        this.updateSteps();
    }

    setName(name: string) {
        this.meal.name = name;
        this.changed = true;
    }

    setNewMeal() {
        this.meal = FullMeal.create();
        this.loaded = true;
    }

    addCurrentIngredientToMeal() {
        if (!!this.currentIngredient) {
            this.meal.addIngredient(this.currentIngredient);
            this.updateIngredients();
            this.changed = true;
        }
    }

    addCurrentStep() {
        if (!!this.currentStep) {
            this.meal.addStep(this.currentStep);
            this.updateSteps();
            this.changed = true;
        }
    }

    setCurrentIngredient(text: string) {
        this.currentIngredient = text;
    }

    setCurrentStep(text: string) {
        this.currentStep = text;
    }

    updateIngredients() {
        this.ingredients = this.meal.ingredients;
    }

    updateSteps() {
        this.steps = this.meal.steps;
    }

    removeIngredient(position: number) {
        this.meal.removeIngredient(position);
        this.updateIngredients();
        this.changed = true;
    }

    removeStep(position: number) {
        this.meal.removeStep(position);
        this.updateSteps();
        this.changed = true;
    }

    getLengthIndex(meal: FullMeal) {
        switch (meal.length) {
            case "long":
                return 2;
            case "medium":
                return 1;
            case "short":
                return 0;
        }
    }

    setLengthByIndex(index: 0 | 1 | 2) {
        this.lengthIndex = index;
        switch (index) {
            case 0:
                this.meal.length = "short";
                break;
            case 1:
                this.meal.length = "medium";
                break;
            case 2:
                this.meal.length = "long";
                break;
        }
        this.changed = true;
    }
}
