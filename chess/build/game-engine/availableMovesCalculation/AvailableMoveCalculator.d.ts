import { Board } from "../Board";
import { Move } from "../Moves";
import { Player } from "../Player";
import { BishopMoveCalculator } from "./BishopMoveCalculator";
import { CheckCalculator } from "./CheckCalculator";
import { KingMoveCalculator } from "./KingMoveCalculator";
import { KnightMoveCalculator } from "./KnightMoveCalculator";
import { PawnMoveCalculator } from "./PawnMoveCalculator";
import { QueenMoveCalculator } from "./QueenMoveCalculator";
import { RookMoveCalculator } from "./RookMoveCalculator";
/**
 * Class for calculating available moves of a player
 */
export declare class AvailableMoveCalculator {
    private readonly checkCalculator;
    private readonly pawnMoveCalculator;
    private readonly knightMoveCalculator;
    private readonly bishopMoveCalculator;
    private readonly rookMoveCalculator;
    private readonly queenMoveCalculator;
    private readonly kingMoveCalculator;
    constructor(checkCalculator?: CheckCalculator, pawnMoveCalculator?: PawnMoveCalculator, knightMoveCalculator?: KnightMoveCalculator, bishopMoveCalculator?: BishopMoveCalculator, rookMoveCalculator?: RookMoveCalculator, queenMoveCalculator?: QueenMoveCalculator, kingMoveCalculator?: KingMoveCalculator);
    getAvailableMovesForPlayer(board: Board, player: Player, lastMove: Move | null): Move[];
    private getAvailableMovesForPiece;
    private isCastlingMoveSafeForKing;
    private getAvailableMovesForPieceIgnoringKingSafety;
    private getAvailableMovesForPlayerIgnoringKingSafety;
    /** This function only checks if the `move` wouldn't cause the current player's king to be in check */
    private isMoveLegal;
}
