import { Board } from "../Board";
import { Move } from "../Moves";
import { King } from "../pieces";
import { Position } from "../positions";
import { PieceMoveCalculator } from "./PieceMoveCalculator";
export declare class KingMoveCalculator implements PieceMoveCalculator {
    getAvailableMovesForPieceIgnoringKingSafety(king: King & {
        position: Position;
    }, board: Board): Move[];
    private calculateNonCastlingMoves;
    private calculateCastlingMoves;
}
