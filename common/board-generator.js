import Tile from './tile';
import State from './state';
import Board from './board';

export default class BoardGenerator {
    constructor(width, height, bombs) {
        this.width = width;
        this.height = height;
        this.bombs = bombs;
        this.matrix = Array.from({ length: this.width }, (_, x) => Array.from({ length: this.height }, (_, y) => new Tile(x, y, State.NEUTRAL)));
    }

    static generate(width, height, bombs) {
        return new BoardGenerator(width, height, bombs).random();
    }

    random() {
        this.addBombs();
        this.setCluesOnTilesNearBombs();
        return new Board(this.matrix);
    }

    addBombs() {
        let i = 0, limit = this.width * this.height;
        while (i < this.bombs) {
            let x = Math.floor(Math.random() * (this.width - 1));
            let y = Math.floor(Math.random() * (this.height - 1));
            console.log(this.bombs)
            console.log('random - (' + i + ') x:' + x + ', y:' + y + ', state:' + this.matrix[x][y].state);
            if (this.matrix[x][y].state === State.NEUTRAL) {
                this.matrix[x][y].state = State.BOMB;
                i++;
            }
        }
    }

    setCluesOnTilesNearBombs() {
        let x, y;
        for (x = 0; x < this.width; x++)
            for (y = 0; y < this.height; y++) {
                if (this.matrix[x][y].state == State.BOMB) {
                    this.increaseTileCount(x - 1, y);
                    this.increaseTileCount(x - 1, y - 1);
                    this.increaseTileCount(x, y - 1);
                    this.increaseTileCount(x + 1, y);
                    this.increaseTileCount(x + 1, y + 1);
                    this.increaseTileCount(x, y + 1);
                    this.increaseTileCount(x - 1, y + 1);
                    this.increaseTileCount(x + 1, y - 1);
                }
            }
    }

    increaseTileCount(x, y) {
        if (x < 0 || x >= this.matrix.length)
            return;
        if (y < 0 || y >= this.matrix[0].length)
            return;
        let tile = this.matrix[x][y];
        if (tile.state == State.NEUTRAL)
            tile.state = State.NUMBER;
        switch (tile.state) {
            case State.BOMB:
                return;
            case State.NUMBER:
                tile.number = tile.number + 1;
                break;
            default:
        }

    }

}
