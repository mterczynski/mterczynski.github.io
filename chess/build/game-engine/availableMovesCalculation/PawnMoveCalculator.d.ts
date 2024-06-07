import { Board } from "../Board";
import { Move } from "../Moves";
import { Pawn } from "../pieces";
import { Position } from "../positions";
import { PieceMoveCalculator } from "./PieceMoveCalculator";
export declare class PawnMoveCalculator implements PieceMoveCalculator {
    /** lastMove can be null only before white has made the first move */
    getAvailableMovesForPieceIgnoringKingSafety(pawn: Pawn & {
        position: Position;
    }, board: Board, lastMove: Move | null): Move[];
    private getForwardMoves;
    private getNonEnPassantAttackingMoves;
    private getEnPassantMoves;
    private getDirection;
}
