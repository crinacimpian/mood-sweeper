import State from './state';
import WarningError from './warning-error';
import GameLostError from './gamelost-error';

export default class Board {

	constructor(matrix) {
		this.matrix = matrix;
		this.width = this.matrix.length;
		this.height = this.matrix[0].length;
		this.totalTiles = matrix.length * matrix[0].length;
		this.flipedTiles = 0;
	}

	//  constructor(prevChange) {
	//     matrix = JSON.decode(JSON.encode(arr1));
	// 	this.prev = prevChange;
	// 	this.totalTiles = matrix.length * matrix[0].length;
	// 	this.flipedTiles = prevChange.flipedTiles;
	// }

	openTile(tile) {
		if (tile.open)
			throw new WarningError("Tile already open!");
		this.explode(tile.x, tile.y)
	}

	isComplete() {
		return this.flipedTiles == this.totalTiles;
	}

	remainingTiles() {
		return this.totalTiles - this.flipedTiles;
	}

	// previousState() {
	// 	return prev;
	// }

	reveal() {
		return this.matrix;
	}

	tile(x, y) {
		if (x < 0 || x >= this.width)
			throw new WarningError("Tile out of bounds!");
		if (y < 0 || y >= this.height)
			throw new WarningError("Tile out of bounds!");
		return this.matrix[x][y];
	}

	explode(x, y) {
		try {
			// alert(x+','+y);
			let tile = this.tile(x, y);
			if (tile.open) return;
			tile.open = true;
			this.flipedTiles++;
			// switch (tile.state) {
			// 	case State.BOMB:
			// 		throw new GameLostError();
			// 	case State.NEUTRAL:
			// 		this.explode(x, y - 1);
			// 		this.explode(x, y + 1);
			// 		this.explode(x - 1, y);
			// 		this.explode(x + 1, y);
			// 		this.explode(x - 1, y - 1);
			// 		this.explode(x + 1, y + 1);
			// 		this.explode(x + 1, y - 1);
			// 		this.explode(x - 1, y + 1);
			// 		break;
			// 	default:
			// 		return;
			// }
		} catch (e) {
			if (e instanceof WarningError) return;
			throw e;
		}
	}
}
