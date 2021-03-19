import {MealsStore} from "./MealsStore";
import {CurrentMealStore} from "./CurrentMealStore";
import {action, makeObservable, observable} from "mobx";
import Colors from "../constants/Colors";
import Fonts from "../constants/Fonts";

export class Theme {
    colors: typeof Colors.light & typeof Colors.dark
    fontSizes: typeof Fonts

    constructor(colors?: typeof Colors.light & typeof Colors.dark) {
        this.colors = colors || Colors.light;
        this.fontSizes = Fonts;
    }

    getColor(colorName: keyof typeof Colors.light & keyof typeof Colors.dark) {
        return this.colors[colorName];
    }

    getFontSize(name: keyof typeof Fonts): number {
        return this.fontSizes[name];
    }
}

class RootStore {
    mealsStore: MealsStore
    currentMealStore: CurrentMealStore
    theme: Theme

    constructor() {
        this.mealsStore = new MealsStore(this)
        this.currentMealStore = new CurrentMealStore(this)
        this.theme = new Theme()
        makeObservable(this, {
            theme: observable,
            setTheme: action
        })
    }

    setTheme(theme: Theme) {
        this.theme = theme;
    }
}


export default RootStore;