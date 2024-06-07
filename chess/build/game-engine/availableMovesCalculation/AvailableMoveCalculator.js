"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvailableMoveCalculator = void 0;
const lodash_1 = __importDefault(require("lodash"));
const utils_1 = require("../utils");
const getFileDifference_1 = require("../positions/getFileDifference");
const isCastlingMove_1 = require("../utils/isCastlingMove");
const pieces_1 = require("../pieces");
const BishopMoveCalculator_1 = require("./BishopMoveCalculator");
const CheckCalculator_1 = require("./CheckCalculator");
const KingMoveCalculator_1 = require("./KingMoveCalculator");
const KnightMoveCalculator_1 = require("./KnightMoveCalculator");
const PawnMoveCalculator_1 = require("./PawnMoveCalculator");
const QueenMoveCalculator_1 = require("./QueenMoveCalculator");
const RookMoveCalculator_1 = require("./RookMoveCalculator");
/**
 * Class for calculating available moves of a player
 */
class AvailableMoveCalculator {
    constructor(checkCalculator = new CheckCalculator_1.CheckCalculator(), pawnMoveCalculator = new PawnMoveCalculator_1.PawnMoveCalculator(), knightMoveCalculator = new KnightMoveCalculator_1.KnightMoveCalculator(), bishopMoveCalculator = new BishopMoveCalculator_1.BishopMoveCalculator(), rookMoveCalculator = new RookMoveCalculator_1.RookMoveCalculator(), queenMoveCalculator = new QueenMoveCalculator_1.QueenMoveCalculator(), kingMoveCalculator = new KingMoveCalculator_1.KingMoveCalculator()) {
        this.checkCalculator = checkCalculator;
        this.pawnMoveCalculator = pawnMoveCalculator;
        this.knightMoveCalculator = knightMoveCalculator;
        this.bishopMoveCalculator = bishopMoveCalculator;
        this.rookMoveCalculator = rookMoveCalculator;
        this.queenMoveCalculator = queenMoveCalculator;
        this.kingMoveCalculator = kingMoveCalculator;
    }
    getAvailableMovesForPlayer(board, player, lastMove) {
        const currentPlayerPieces = (0, pieces_1.getPlayerPieces)(board, player);
        return currentPlayerPieces.flatMap(piece => this.getAvailableMovesForPiece(piece, board, lastMove));
    }
    getAvailableMovesForPiece(pieceWithPostion, board, lastMove) {
        const availableMovesIgnoringKingSafety = this.getAvailableMovesForPieceIgnoringKingSafety(pieceWithPostion, board, lastMove);
        const currentPlayer = pieceWithPostion.player;
        return availableMovesIgnoringKingSafety.filter(move => {
            // const boardClone = _.cloneDeep(board);
            const piece = board[move.from.file][move.from.rank];
            if ((0, isCastlingMove_1.isCastlingMove)(move)) {
                return this.isCastlingMoveSafeForKing(move, board, piece);
            }
            else {
                return this.isMoveLegal(move, board, currentPlayer);
            }
        });
    }
    isCastlingMoveSafeForKing(move, board, king) {
        const currentPlayer = king.player;
        const availableEnemyMoves = this.getAvailableMovesForPlayerIgnoringKingSafety(board, (0, utils_1.negatePlayer)(currentPlayer), null);
        const checkingPiecesOfEnemy = this.checkCalculator.getCheckingEnemyPieces(currentPlayer, board, availableEnemyMoves);
        const isKingInCheck = checkingPiecesOfEnemy.length > 0;
        if (isKingInCheck) {
            return false;
        }
        const moveVector = (0, getFileDifference_1.getFileDifference)(move.from.file, move.to.file);
        const moveVectorDividedBy2 = moveVector / 2;
        /** Move of the king by one file in the direction of castleable rook, used to check if king can move by one field towards the rook,
         * if it can't, the king can't castle */
        const intermediateMove = Object.assign(Object.assign({}, move), { to: {
                file: (0, utils_1.addToFile)(move.from.file, moveVectorDividedBy2),
                rank: move.to.rank
            } });
        return !isKingInCheck &&
            this.isMoveLegal(intermediateMove, board, currentPlayer) &&
            this.isMoveLegal(move, board, currentPlayer);
    }
    getAvailableMovesForPieceIgnoringKingSafety(pieceWithPostion, board, lastMove) {
        if (pieceWithPostion.type === pieces_1.PieceType.PAWN) {
            return this.pawnMoveCalculator.getAvailableMovesForPieceIgnoringKingSafety(pieceWithPostion, board, lastMove);
        }
        else if (pieceWithPostion.type === pieces_1.PieceType.KNIGHT) {
            return this.knightMoveCalculator.getAvailableMovesForPieceIgnoringKingSafety(pieceWithPostion, board);
        }
        else if (pieceWithPostion.type === pieces_1.PieceType.BISHOP) {
            return this.bishopMoveCalculator.getAvailableMovesForPieceIgnoringKingSafety(pieceWithPostion, board);
        }
        else if (pieceWithPostion.type === pieces_1.PieceType.ROOK) {
            return this.rookMoveCalculator.getAvailableMovesForPieceIgnoringKingSafety(pieceWithPostion, board);
        }
        else if (pieceWithPostion.type === pieces_1.PieceType.QUEEN) {
            return this.queenMoveCalculator.getAvailableMovesForPieceIgnoringKingSafety(pieceWithPostion, board);
        }
        else if (pieceWithPostion.type === pieces_1.PieceType.KING) {
            return this.kingMoveCalculator.getAvailableMovesForPieceIgnoringKingSafety(pieceWithPostion, board);
        }
        console.error('unknown piece type');
        return [];
    }
    getAvailableMovesForPlayerIgnoringKingSafety(board, player, lastMove) {
        const currentPlayerPieces = (0, pieces_1.getPlayerPieces)(board, player);
        return currentPlayerPieces.flatMap(piece => this.getAvailableMovesForPieceIgnoringKingSafety(piece, board, lastMove));
    }
    /** This function only checks if the `move` wouldn't cause the current player's king to be in check */
    isMoveLegal(move, board, currentPlayer) {
        const boardClone = lodash_1.default.cloneDeep(board);
        const piece = boardClone[move.from.file][move.from.rank];
        boardClone[move.to.file][move.to.rank] = piece;
        boardClone[move.from.file][move.from.rank] = null;
        /** List of moves that enemy can perform (ignoring king safety), the list of moves might include moves that would cause enemy king to be in check.
         * This list of moves is used to check what enemy pieces would check current player's king after making the `move`
         */
        const availableEnemyMovesAfterMove = this.getAvailableMovesForPlayerIgnoringKingSafety(boardClone, (0, utils_1.negatePlayer)(currentPlayer), null);
        const checkingPiecesOfEnemyAfterMove = this.checkCalculator.getCheckingEnemyPieces(currentPlayer, boardClone, availableEnemyMovesAfterMove);
        return checkingPiecesOfEnemyAfterMove.length === 0;
    }
}
exports.AvailableMoveCalculator = AvailableMoveCalculator;
