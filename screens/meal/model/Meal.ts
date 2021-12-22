type MealProps = {
    id: string,
    name: string,
    length?: "short" | "medium" | "long",
    tags?: Tag[]
};

export class Meal {
    id: string;
    name: string;
    length: "short" | "medium" | "long";
    tags: Tag[];

    constructor({id, name, length = "short", tags = []}: MealProps) {
        this.id = id;
        this.name = name;
        this.tags = tags;
        this.length = length;
    }

    static create() {
        return new Meal({id: "", name: ""});
    }

    addTag(name: string) {
        this.tags.push(new Tag(name));
    }

    removeTag(name: string) {
        this.tags = this.tags.filter(tag => tag.name !== name);
    }
}

export class Step {
    idMapping: number
    position: number
    name: string

    constructor(idMapping: number, position: number, name: string) {
        this.idMapping = idMapping;
        this.position = position;
        this.name = name;
    }
}

export class Tag {
    id: string;
    name: string;

    constructor(name: string, id: string = "") {
        this.name = name;
        this.id = id;
    }
}

type FullMealProps = {
    ingredients?: Step[],
    steps?: Step[]
} & MealProps;

export class FullMeal extends Meal {
    steps: Step[] = []
    ingredients: Step[] = []

    constructor(props: FullMealProps) {
        super(props);
        this.ingredients = props.ingredients || [];
        this.steps = props.steps || [];
    }

    static create() {
        return new FullMeal({id: "", name: " "});
    }

    addStep(name: string) {
        this.steps.unshift(new Step(0,0, name));
        this.steps.forEach((e, i) => {
            e.position =  i;
        });
    }

    addIngredient(name: string) {
        this.ingredients.unshift(new Step(0, 0, name));
        this.ingredients.forEach((e, i) => {
           e.position =  i;
        });
    }

    removeStep(position: number) {
        this.steps = this.steps
            .filter(e => e.position !== position)
            .map((e, i) => {
                e.position = i+1;
                return e;
            });
    }

    removeIngredient(position: number) {
        this.ingredients = this.ingredients
            .filter(e => e.position !== position)
            .map((e, i) => {
                e.position = i+1;
                return e;
            });
    }

    static getDbIngredient(ingredient: Step) {
        // const matches = new RegExp("(\\d|\\d* *?)(\\D*) (.*)", ingredient.name);


    }

}