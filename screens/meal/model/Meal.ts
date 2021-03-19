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
    position: number
    text: string

    constructor(position: number, text: string) {
        this.position = position;
        this.text = text;
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
        return new FullMeal({id: "", name: ""});
    }

    addStep(text: string) {
        const position = this.steps.length + 1;
        this.steps.push(new Step(position, text));
    }

    addIngredient(text: string) {
        const position = this.ingredients.length + 1;
        this.ingredients.push(new Step(position, text));
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

}