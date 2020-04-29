export default class Tile {
    #x;
    #y;
    #state;
    #open;
    #number;
    constructor(x, y, state) {
        this.#x = x;
        this.#y = y;
        this.#state = state;
        this.#open = false;
        this.#number = 0;
    }

    get x() {
        return this.#x;
    }
    get y() {
        return this.#y;
    }
    get state() {
        return this.#state;
    }
    set state(newState) {
        this.#state = newState;
    }
    get open() {
        return this.#open;
    }
    set open(isOpen) {
        this.#open = isOpen;
    }
    get number() {
        return this.#number;
    }
    set number(newNumber) {
        this.#number = newNumber;
    }


    value() {
        switch (this.#state) {
            case BOMB:
                return "!";
            case NEUTRAL:
                return " ";
            case NUMBER:
                return String.valueOf(this.#number);
            default:
                return "";
        }
    }

}