
import {BOMB} from './state';
import Board from './board';
import { DEFAULT_WIDTH, DEFAULT_HEIGHT, MAX_SIZE } from '../common/state';

export default class BoardGenerator {
    #bombs;
    #board;

    constructor(board, bombs) {
        this.#board = board;
        this.#bombs = bombs;
    }

    static generate(width, height) {
        width = parseInt(width);
        if (!width) width = DEFAULT_WIDTH;
        else if (width <= 0 || width > MAX_SIZE) {width=DEFAULT_WIDTH;}

        height = parseInt(height);
        if (!height) height = DEFAULT_HEIGHT;
        else if (height <= 0 || height > MAX_SIZE) {height=DEFAULT_HEIGHT;}

        let bombs = Math.floor(Math.random() * (width - 1));
        return new BoardGenerator(new Board(width, height), bombs).random();
    }

    random() {
        this.addBombs();
        this.setCluesOnTilesNearBombs();
        return this.#board;
    }

    addBombs() {
        let width = this.#board.width, height = this.#board.height;
        let i = 0;
        while (i < this.#bombs) {
            let x = Math.floor(Math.random() * (width - 1));
            let y = Math.floor(Math.random() * (height - 1));
            if (this.#board.setBomb(x,y)) i++;
        }
    }

    setCluesOnTilesNearBombs() {
        let width = this.#board.width, height = this.#board.height;
        let x, y;
        for (x = 0; x < width; x++)
            for (y = 0; y < height; y++) {
                let tile = this.#board.tile(x,y);
                if (tile.state == BOMB) {
                    this.#board.increaseTileCount(x - 1, y);
                    this.#board.increaseTileCount(x - 1, y - 1);
                    this.#board.increaseTileCount(x, y - 1);
                    this.#board.increaseTileCount(x + 1, y);
                    this.#board.increaseTileCount(x + 1, y + 1);
                    this.#board.increaseTileCount(x, y + 1);
                    this.#board.increaseTileCount(x - 1, y + 1);
                    this.#board.increaseTileCount(x + 1, y - 1);
                }
            }
    }

}
