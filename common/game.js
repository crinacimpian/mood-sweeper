

import Board from './board';

export default class Game {

	//  constructor( width,  height,  bombs) {
	// 	this.width = width;
	// 	this.height = height;
    //     this.bombs = bombs;
    //     history = new ArrayList();
	// }

	// newGame() {
	// 	board = BoardGenerator.generate(width, height, bombs);
	// 	history.add(board);
	// 	return board;
	// }

	// // if tile is 0 - explode
	// // if tile is >0 flip the tile
	// // if tile is -1 game over
	//   click( x,  y) {
	// 	lastBoardState = history.get(history.size() - 1);
	// 	if (lastBoardState.isComplete()) throw new WarningError("Game already complete!");
	// 	newBoardState = new Board(lastBoardState);
	// 	tile = newBoardState.getTile(x, y);
	// 	switch (tile.getState()) {
	// 	case BOMB:
	// 		throw new GameLostError();
	// 	case NEUTRAL:
	// 		explode(newBoardState, tile.getX(), tile.getY());
	// 		break;
	// 	default:
	// 		newBoardState.openTile(x, y);
	// 	}
	// 	history.add(newBoardState);
	// 	return newBoardState;

	// }

	// getHistory() {
	// 	return Collections.unmodifiableList(history);
	// }

	static explode(board,  x,  y)  {
		tile;
		try {
			tile = board.openTile(x, y);
		} catch (e) {
            if (e instanceof WarningError) return;
			throw e;
		}
		switch (tile.getState()) {
		case BOMB:
			throw new GameLostException();
		case NEUTRAL:
			explode(board, x, y - 1);
			explode(board, x, y + 1);
			explode(board, x - 1, y);
			explode(board, x + 1, y);
			explode(board, x - 1, y - 1);
			explode(board, x + 1, y + 1);
			explode(board, x + 1, y - 1);
			explode(board, x - 1, y + 1);
		default:
			break;
		}
	}
}
