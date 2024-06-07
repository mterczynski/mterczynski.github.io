import { Board } from "../Board";
import { Move } from "../Moves";
import { Queen } from "../pieces";
import { Position } from "../positions";
import { PieceMoveCalculator } from "./PieceMoveCalculator";
export declare class QueenMoveCalculator implements PieceMoveCalculator {
    getAvailableMovesForPieceIgnoringKingSafety(queen: Queen & {
        position: Position;
    }, board: Board): Move[];
}
