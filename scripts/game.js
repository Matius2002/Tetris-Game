import { BoardTetris } from "./boardTetris.js"
import { TetrominosBag } from "./tetromino";

export class Game{
    constructor(canvas, rows, cols, cellSize, space){
        this.boardTetris = new BoardTetris(canvas, rows, cols, cellSize, space);
        this.tetrominosBag = new TetrominosBag(canvas, cellSize);
        this.currentTetromino = this.tetrominosBag.nextTetromino();
    }
    blockedTetromino(){
        const tetrominoPositions = this.currentTetromino.currentPositions();
    }
}