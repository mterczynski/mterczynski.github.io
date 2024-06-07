"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PawnMoveCalculator = void 0;
const Game_1 = require("../Game");
const Moves_1 = require("../Moves");
const pieces_1 = require("../pieces");
const Player_1 = require("../Player");
const positions_1 = require("../positions");
class PawnMoveCalculator {
    /** lastMove can be null only before white has made the first move */
    getAvailableMovesForPieceIgnoringKingSafety(pawn, board, lastMove) {
        const availableMoves = [
            ...this.getForwardMoves(pawn, board),
            ...this.getEnPassantMoves(pawn, board, lastMove),
            ...this.getNonEnPassantAttackingMoves(pawn, board),
        ];
        return availableMoves;
    }
    getForwardMoves(pawn, board) {
        const direction = this.getDirection(pawn.player);
        const file = pawn.position.file;
        const nextRank = (pawn.position.rank + direction);
        const nextSecondRank = (pawn.position.rank +
            direction * 2);
        const firstSquareUp = board[file][nextRank];
        const secondSquareUp = board[file][nextSecondRank];
        const startingRank = pawn.player === Player_1.Player.WHITE ? 2 : Game_1.Game.boardSize - 1;
        const hasntMoved = pawn.position.rank === startingRank;
        let forwardSingleMove = firstSquareUp === null
            ? { from: pawn.position, to: { file, rank: nextRank } }
            : null;
        const forwardDoubleMove = forwardSingleMove && hasntMoved && secondSquareUp === null
            ? { from: pawn.position, to: { file, rank: nextSecondRank } }
            : null;
        const forwardMoves = [
            ...(forwardDoubleMove ? [forwardDoubleMove] : []),
        ];
        const isPromotionAvailable = (forwardSingleMove === null || forwardSingleMove === void 0 ? void 0 : forwardSingleMove.to.rank) === 1 ||
            (forwardSingleMove === null || forwardSingleMove === void 0 ? void 0 : forwardSingleMove.to.rank) === Game_1.Game.boardSize;
        if (forwardSingleMove) {
            if (isPromotionAvailable) {
                forwardMoves.push(Object.assign(Object.assign({}, forwardSingleMove), { type: Moves_1.SpecialMoveType.PROMOTION, promoteTo: pieces_1.PieceType.KNIGHT }), Object.assign(Object.assign({}, forwardSingleMove), { type: Moves_1.SpecialMoveType.PROMOTION, promoteTo: pieces_1.PieceType.BISHOP }), Object.assign(Object.assign({}, forwardSingleMove), { type: Moves_1.SpecialMoveType.PROMOTION, promoteTo: pieces_1.PieceType.ROOK }), Object.assign(Object.assign({}, forwardSingleMove), { type: Moves_1.SpecialMoveType.PROMOTION, promoteTo: pieces_1.PieceType.QUEEN }));
            }
            else {
                forwardMoves.push(forwardSingleMove);
            }
        }
        return forwardMoves;
    }
    getNonEnPassantAttackingMoves(pawn, board) {
        const direction = this.getDirection(pawn.player);
        const attackingMoves = [];
        const nextRank = (0, positions_1.addToRank)(pawn.position.rank, direction);
        if (nextRank === null) {
            return [];
        }
        const checkForPossibleAttackOnFile = (file) => {
            if (!file) {
                return;
            }
            const squareToAttack = board[file][nextRank];
            if (!squareToAttack ||
                (squareToAttack === null || squareToAttack === void 0 ? void 0 : squareToAttack.player) === null ||
                (squareToAttack === null || squareToAttack === void 0 ? void 0 : squareToAttack.player) === pawn.player) {
                return;
            }
            const promotingRank = pawn.player === Player_1.Player.WHITE ? Game_1.Game.boardSize : 1;
            const isPromotionAvailable = nextRank === promotingRank;
            if (isPromotionAvailable) {
                const promotingMoveBase = {
                    from: pawn.position,
                    to: {
                        file,
                        rank: nextRank,
                    },
                    type: Moves_1.SpecialMoveType.PROMOTION,
                };
                attackingMoves.push(Object.assign(Object.assign({}, promotingMoveBase), { promoteTo: pieces_1.PieceType.KNIGHT }));
                attackingMoves.push(Object.assign(Object.assign({}, promotingMoveBase), { promoteTo: pieces_1.PieceType.BISHOP }));
                attackingMoves.push(Object.assign(Object.assign({}, promotingMoveBase), { promoteTo: pieces_1.PieceType.ROOK }));
                attackingMoves.push(Object.assign(Object.assign({}, promotingMoveBase), { promoteTo: pieces_1.PieceType.QUEEN }));
            }
            else {
                attackingMoves.push({
                    from: pawn.position,
                    to: {
                        file,
                        rank: nextRank,
                    },
                });
            }
        };
        const fileToTheBoardsLeft = (0, positions_1.addToFile)(pawn.position.file, -1);
        const fileToTheBoardsRight = (0, positions_1.addToFile)(pawn.position.file, 1);
        checkForPossibleAttackOnFile(fileToTheBoardsLeft);
        checkForPossibleAttackOnFile(fileToTheBoardsRight);
        return attackingMoves;
    }
    getEnPassantMoves(pawn, board, lastMove) {
        if (!lastMove) {
            return [];
        }
        const direction = this.getDirection(pawn.player);
        const lastMovedPiece = board[lastMove.to.file][lastMove.to.rank];
        const wasPawnMovedInLastMove = lastMovedPiece.type === pieces_1.PieceType.PAWN;
        const wasLastMoveBy2Ranks = Math.abs(lastMove.to.rank - lastMove.from.rank) === 2;
        const wasLastMoveDoublePawnMove = lastMove && wasPawnMovedInLastMove && wasLastMoveBy2Ranks;
        const isLastMovedPieceNextToPawn = pawn.position.rank === lastMove.to.rank &&
            ((0, positions_1.addToFile)(pawn.position.file, 1) === lastMove.to.file ||
                (0, positions_1.addToFile)(pawn.position.file, -1) === lastMove.to.file);
        if (wasLastMoveDoublePawnMove && isLastMovedPieceNextToPawn) {
            return [
                {
                    from: pawn.position,
                    to: {
                        file: lastMove.to.file,
                        rank: (0, positions_1.addToRank)(pawn.position.rank, direction),
                    },
                    type: Moves_1.SpecialMoveType.EN_PASSANT,
                },
            ];
        }
        return [];
    }
    getDirection(currentPlayer) {
        return currentPlayer === Player_1.Player.WHITE ? 1 : -1;
    }
}
exports.PawnMoveCalculator = PawnMoveCalculator;
