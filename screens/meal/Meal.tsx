export default class Meal {
    id: string;
    name: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

    static create() {
        return new Meal("", "");
    }
}