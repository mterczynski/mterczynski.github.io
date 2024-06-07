import { AvailableMoveCalculator } from "./availableMovesCalculation";
import { CheckCalculator } from "./availableMovesCalculation/CheckCalculator";
import { Board } from "./Board";
import { GameState } from "./GameState";
import { Move } from "./Moves";
import { Player } from "./Player";
export declare class Game {
    private readonly checkCalculator;
    private readonly availableMoveCalculator;
    static readonly boardSize = 8;
    private state;
    private currentPlayer;
    private board;
    private moves;
    constructor(checkCalculator?: CheckCalculator, availableMoveCalculator?: AvailableMoveCalculator);
    getState(): GameState;
    /** Returns clone of the original board */
    getBoard(): Board;
    move(move: Move): void;
    getAvailableMovesForPlayer(): Move[];
    getCurrentPlayer(): Player | null;
    clone(): Game;
    private getLastMove;
    private changePlayer;
    private isGameOver;
    private checkMoveValidityAndAddMetadata;
    private castleRook;
    private checkForCastle;
    private enPassantIfAppliable;
    private promote;
    private applyMove;
    private getNewGameStateAfterMove;
}
