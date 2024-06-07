"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KingMoveCalculator = void 0;
const utils_1 = require("../utils");
const Moves_1 = require("../Moves");
const pieces_1 = require("../pieces");
const positions_1 = require("../positions");
class KingMoveCalculator {
    getAvailableMovesForPieceIgnoringKingSafety(king, board) {
        return [
            ...this.calculateNonCastlingMoves(king, board),
            ...this.calculateCastlingMoves(king, board),
        ];
    }
    calculateNonCastlingMoves(king, board) {
        const relativeMoves = [
            { fileIncrement: -1, rankIncrement: -1 },
            { fileIncrement: -1, rankIncrement: 0 },
            { fileIncrement: -1, rankIncrement: 1 },
            { fileIncrement: 0, rankIncrement: -1 },
            { fileIncrement: 0, rankIncrement: 1 },
            { fileIncrement: 1, rankIncrement: -1 },
            { fileIncrement: 1, rankIncrement: 0 },
            { fileIncrement: 1, rankIncrement: 1 },
        ];
        const relativeMovesInsideTheBoard = relativeMoves
            .map((relativeMove) => {
            const newRank = (0, positions_1.addToRank)(king.position.rank, relativeMove.rankIncrement);
            const newFile = (0, positions_1.addToFile)(king.position.file, relativeMove.fileIncrement);
            return { newRank, newFile };
        })
            .filter(({ newRank, newFile }) => newFile && newRank);
        const possibleMoves = relativeMovesInsideTheBoard.filter((move) => {
            const square = board[move.newFile][move.newRank];
            return (square === null || square.player === (0, utils_1.negatePlayer)(king.player));
        });
        return possibleMoves.map((possibleMove) => {
            return {
                from: king.position,
                to: {
                    file: possibleMove.newFile,
                    rank: possibleMove.newRank,
                },
            };
        });
    }
    calculateCastlingMoves(king, board) {
        if (king.hasMoved) {
            return [];
        }
        const movableRooks = (0, pieces_1.getPlayerPieces)(board, king.player).filter((piece) => piece.type === pieces_1.PieceType.ROOK && !piece.hasMoved);
        const movableRooksWithNoPieceBetweenKing = movableRooks.filter((rook) => {
            const rookFile = rook.position.file;
            const kingFile = king.position.file;
            const filesBetweenKingAndRook = (0, utils_1.getFileRange)(rookFile, kingFile, { inclusive: false });
            const isEverySquareInBetweenEmpty = filesBetweenKingAndRook.every((file) => board[file][king.position.rank] === null);
            return isEverySquareInBetweenEmpty;
        });
        return movableRooksWithNoPieceBetweenKing.map((rook) => ({
            from: king.position,
            to: {
                rank: king.position.rank,
                file: (0, positions_1.addToFile)(king.position.file, rook.position.file > king.position.file ? 2 : -2),
            },
            type: Moves_1.SpecialMoveType.CASTLING,
        }));
    }
}
exports.KingMoveCalculator = KingMoveCalculator;
