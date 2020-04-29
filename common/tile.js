export default class Tile {
    constructor(x, y, state) {
        this.x = x;
        this.y = y;
        this.state = state;
        this.open = false;
        this.number = 0;
    }

    value() {
        switch (state) {
            case BOMB:
                return "!";
            case NEUTRAL:
                return " ";
            case NUMBER:
                return String.valueOf(number);
            default:
                return "";
        }
    }

}