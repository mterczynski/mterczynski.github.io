import { Board } from "../Board";
import { Move } from "../Moves";
import { Knight } from "../pieces";
import { Position } from "../positions";
import { PieceMoveCalculator } from "./PieceMoveCalculator";
export declare class KnightMoveCalculator implements PieceMoveCalculator {
    getAvailableMovesForPieceIgnoringKingSafety(knight: Knight & {
        position: Position;
    }, board: Board): Move[];
}
