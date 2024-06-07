import { Board } from "../Board";
import { Move } from "../Moves";
import { PieceWithPosition } from "../pieces";
import { Player } from "../Player";
export declare class CheckCalculator {
    /** get pieces that create checks */
    getCheckingEnemyPieces(currentPlayer: Player, board: Board, availableEnemyMovesIgnoringKingSafety: Move[]): PieceWithPosition[];
}
