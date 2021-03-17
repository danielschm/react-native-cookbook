import {MealsStore} from "./MealsStore";
import {CurrentMealStore} from "./CurrentMealStore";

class RootStore {
    mealsStore : MealsStore
    currentMealStore : CurrentMealStore

    constructor() {
        this.mealsStore = new MealsStore(this)
        this.currentMealStore = new CurrentMealStore(this)
    }
}


export default RootStore;