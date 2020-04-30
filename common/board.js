import { NEUTRAL, NUMBER, BOMB, INCOMPLETE, SUCCESS, FAIL } from './state';
import Tile from './tile';
import WarningError from './warning-error';
import GameLostError from './gamelost-error';

export default class Board {
	#state;
	#bombs;
	#matrix;
	#width;
	#height;
	#totalTiles;
	#flipedTiles;

	constructor(width, height) {
		this.#width = width;
		this.#height = height;
		this.#matrix = Array.from({ length: height }, (_, y) => Array.from({ length: width }, (_, x) => new Tile(x, y, NEUTRAL)));
		console.log(this.#matrix)
		this.#totalTiles = width * height;
		this.#flipedTiles = 0;
		this.#bombs = 0;
		this.#state = INCOMPLETE;
	}

	get width() {
		return this.#width;
	}
	get height() {
		return this.#height;
	}
	get state() {
		return this.#state;
	}
	get remainingTiles() {
		return this.#totalTiles - this.#flipedTiles;
	}
	get content() {
		return this.#matrix;
	}

	isComplete() {
		return this.#state !== INCOMPLETE;
	}

	setBomb(x, y) {
		let tile = this.tile(x, y);
		if (tile.state === NEUTRAL) {
			tile.state = BOMB;
			this.#bombs++;
			return true;
		}
		return false;
	}

	increaseTileCount(x, y) {
		try {
			let tile = this.tile(x, y);
			if (tile.state == NEUTRAL)
				tile.state = NUMBER;
			switch (tile.state) {
				case BOMB:
					return;
				case NUMBER:
					tile.number = tile.number + 1;
					break;
				default:
			}
		}
		catch (e) { }
	}

	openTile(tile) {
		if (tile.open)
			throw new WarningError("Tile already open!");
		this.explode(tile.x, tile.y);
		if (this.remainingTiles == this.#bombs && this.#state == INCOMPLETE) this.#state = SUCCESS;
	}

	explode(x, y) {
		try {
			let tile = this.tile(x, y);
			if (tile.open) return;
			tile.open = true;
			this.#flipedTiles++;
			switch (tile.state) {
				case BOMB:
					this.#state = FAIL;
					throw new GameLostError();
				case NEUTRAL:
					this.explode(x, y - 1);
					this.explode(x, y + 1);
					this.explode(x - 1, y);
					this.explode(x + 1, y);
					this.explode(x - 1, y - 1);
					this.explode(x + 1, y + 1);
					this.explode(x + 1, y - 1);
					this.explode(x - 1, y + 1);
					return;
				default:
					return;
			}
		} catch (e) {
			if (e instanceof WarningError) return;
			throw e;
		}
	}

	tile(x, y) {
		if (x < 0 || x >= this.#width)
			throw new WarningError("Tile out of bounds!");
		if (y < 0 || y >= this.#height)
			throw new WarningError("Tile out of bounds!");
		return this.#matrix[y][x];
	}
}
