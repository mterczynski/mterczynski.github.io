import { Board } from "../Board";
import { Move } from "../Moves";
import { PieceWithPosition } from "../pieces";
export declare class LineMoveCalculator {
    getAvailableMovesOnLineIgnoringKingSafety(piece: PieceWithPosition, board: Board): Move[];
    private getAvailableMovesForLine;
}
