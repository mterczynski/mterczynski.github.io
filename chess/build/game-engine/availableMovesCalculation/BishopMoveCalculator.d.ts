import { Board } from "../Board";
import { Bishop } from "../pieces";
import { Position } from "../positions";
import { PieceMoveCalculator } from "./PieceMoveCalculator";
export declare class BishopMoveCalculator implements PieceMoveCalculator {
    getAvailableMovesForPieceIgnoringKingSafety(bishop: Bishop & {
        position: Position;
    }, board: Board): import("..").Move[];
}
