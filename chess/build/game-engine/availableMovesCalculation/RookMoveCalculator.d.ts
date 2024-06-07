import { Board } from "../Board";
import { Move } from "../Moves";
import { Rook } from "../pieces";
import { Position } from "../positions";
import { PieceMoveCalculator } from "./PieceMoveCalculator";
export declare class RookMoveCalculator implements PieceMoveCalculator {
    getAvailableMovesForPieceIgnoringKingSafety(rook: Rook & {
        position: Position;
    }, board: Board): Move[];
}
