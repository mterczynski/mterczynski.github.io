"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const lodash_1 = __importDefault(require("lodash"));
const availableMovesCalculation_1 = require("./availableMovesCalculation");
const CheckCalculator_1 = require("./availableMovesCalculation/CheckCalculator");
const GameState_1 = require("./GameState");
const Moves_1 = require("./Moves");
const pieces_1 = require("./pieces");
const Player_1 = require("./Player");
const positions_1 = require("./positions");
const utils_1 = require("./utils");
class Game {
    constructor(checkCalculator = new CheckCalculator_1.CheckCalculator(), availableMoveCalculator = new availableMovesCalculation_1.AvailableMoveCalculator(checkCalculator)) {
        this.checkCalculator = checkCalculator;
        this.availableMoveCalculator = availableMoveCalculator;
        this.state = GameState_1.GameState.UNSTARTED;
        this.currentPlayer = Player_1.Player.WHITE;
        this.board = (0, utils_1.createNewBoard)();
        this.moves = [];
    }
    getState() {
        return this.state;
    }
    /** Returns clone of the original board */
    getBoard() {
        return lodash_1.default.cloneDeep(this.board);
    }
    move(move) {
        if (this.isGameOver()) {
            throw new Error("Game has already finished, no more moves can be made");
        }
        const updatedMove = this.checkMoveValidityAndAddMetadata(move);
        if (!updatedMove) {
            throw new Error("Invalid move");
        }
        this.applyMove(updatedMove);
        this.state = this.getNewGameStateAfterMove();
        if (this.state === GameState_1.GameState.IN_PROGRESS) {
            this.changePlayer();
        }
    }
    getAvailableMovesForPlayer() {
        return this.availableMoveCalculator.getAvailableMovesForPlayer(this.board, this.currentPlayer, this.getLastMove());
    }
    getCurrentPlayer() {
        if (this.isGameOver()) {
            return null;
        }
        return this.currentPlayer;
    }
    clone() {
        const clone = new Game();
        clone.state = this.state;
        clone.currentPlayer = this.currentPlayer;
        clone.board = lodash_1.default.cloneDeep(this.board);
        clone.moves = lodash_1.default.cloneDeep(this.moves);
        return clone;
    }
    getLastMove() {
        return this.moves.slice(-1)[0] || null;
    }
    changePlayer() {
        this.currentPlayer =
            this.currentPlayer === Player_1.Player.WHITE ? Player_1.Player.BLACK : Player_1.Player.WHITE;
    }
    isGameOver() {
        const draws = [
            GameState_1.GameState.DRAW_BY_50_MOVE_RULE,
            GameState_1.GameState.DRAW_BY_75_MOVE_RULE,
            GameState_1.GameState.DRAW_BY_AGREEMENT,
            GameState_1.GameState.DRAW_BY_INSUFFICIENT_MATERIAL,
            GameState_1.GameState.DRAW_BY_REPETITION,
            GameState_1.GameState.DRAW_BY_STALEMATE,
        ];
        return [GameState_1.GameState.WHITE_WON, GameState_1.GameState.BLACK_WON, ...draws].includes(this.state);
    }
    checkMoveValidityAndAddMetadata(move) {
        const availableMoves = this.getAvailableMovesForPlayer();
        const availableMove = availableMoves.find((availableMove) => (0, positions_1.arePositionsEqual)(availableMove.from, move.from) &&
            (0, positions_1.arePositionsEqual)(availableMove.to, move.to));
        if ((availableMove === null || availableMove === void 0 ? void 0 : availableMove.type) === Moves_1.SpecialMoveType.PROMOTION) {
            if (move.type !== Moves_1.SpecialMoveType.PROMOTION) {
                throw new Error(`Invalid move type (expected=${Moves_1.SpecialMoveType.PROMOTION})`);
            }
            if (!move.promoteTo) {
                throw new Error(`Invalid move: (missing 'promoteTo')`);
            }
            return move;
        }
        return availableMove || null;
    }
    castleRook(kingMove) {
        const rank = kingMove.from.rank;
        const isKingMoveToTheRight = (0, positions_1.getFileDifference)(kingMove.to.file, kingMove.from.file) < 0;
        const rookFile = isKingMoveToTheRight ? positions_1.ChessFile.H : positions_1.ChessFile.A;
        const rook = this.board[rookFile][rank];
        const newRookFile = (0, positions_1.addToFile)(kingMove.to.file, isKingMoveToTheRight ? -1 : 1);
        this.board[newRookFile][rank] = rook;
        this.board[rookFile][rank] = null;
    }
    checkForCastle(move, piece) {
        const isKing = piece.type === pieces_1.PieceType.KING;
        const filesToMove = Math.abs((0, positions_1.getFileDifference)(move.from.file, move.to.file));
        return isKing && filesToMove === 2;
    }
    enPassantIfAppliable(move) {
        if (move.type === Moves_1.SpecialMoveType.EN_PASSANT) {
            this.board[move.to.file][move.to.rank +
                (this.getCurrentPlayer() === Player_1.Player.WHITE ? -1 : 1)] = null;
        }
    }
    promote(move) {
        this.board[move.to.file][move.to.rank] = (0, utils_1.isCastleablePieceType)(move.promoteTo)
            ? {
                player: this.currentPlayer,
                type: move.promoteTo,
                hasMoved: true,
            }
            : {
                player: this.currentPlayer,
                type: move.promoteTo,
            };
    }
    applyMove(move) {
        const piece = this.board[move.from.file][move.from.rank];
        this.board[move.to.file][move.to.rank] = piece;
        this.board[move.from.file][move.from.rank] = null;
        if ((0, utils_1.isCastleablePiece)(piece)) {
            piece.hasMoved = true;
            // TODO - use SpecialMoveType (?)
            if (this.checkForCastle(move, piece)) {
                this.castleRook(move);
            }
        }
        this.enPassantIfAppliable(move);
        if (move.type === Moves_1.SpecialMoveType.PROMOTION) {
            this.promote(move);
        }
        this.moves.push(move);
    }
    // todo - extract to separate class (?)
    // maybe extract it to a class called GameStateHandler (?)
    getNewGameStateAfterMove() {
        if (this.state === GameState_1.GameState.UNSTARTED) {
            return GameState_1.GameState.IN_PROGRESS;
        }
        const enemy = (0, utils_1.negatePlayer)(this.currentPlayer);
        const enemyMoves = this.availableMoveCalculator.getAvailableMovesForPlayer(this.board, enemy, this.getLastMove());
        if (enemyMoves.length === 0) {
            const availableCurrentPlayerMoves = this.availableMoveCalculator.getAvailableMovesForPlayer(this.board, this.currentPlayer, this.getLastMove());
            const checkingPiecesOfCurrentPlayer = this.checkCalculator.getCheckingEnemyPieces(enemy, this.board, availableCurrentPlayerMoves);
            if (checkingPiecesOfCurrentPlayer.length === 0) {
                return GameState_1.GameState.DRAW_BY_STALEMATE;
            }
            else {
                return this.currentPlayer === Player_1.Player.WHITE
                    ? GameState_1.GameState.WHITE_WON
                    : GameState_1.GameState.BLACK_WON;
            }
        }
        return this.state;
    }
}
exports.Game = Game;
Game.boardSize = 8;
