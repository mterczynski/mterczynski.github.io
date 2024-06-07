"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KnightMoveCalculator = void 0;
const positions_1 = require("../positions");
class KnightMoveCalculator {
    getAvailableMovesForPieceIgnoringKingSafety(knight, board) {
        const allMoves = [
            {
                from: knight.position,
                to: {
                    file: (0, positions_1.addToFile)(knight.position.file, -2),
                    rank: (0, positions_1.addToRank)(knight.position.rank, -1),
                },
            },
            {
                from: knight.position,
                to: {
                    file: (0, positions_1.addToFile)(knight.position.file, -2),
                    rank: (0, positions_1.addToRank)(knight.position.rank, 1),
                },
            },
            {
                from: knight.position,
                to: {
                    file: (0, positions_1.addToFile)(knight.position.file, -1),
                    rank: (0, positions_1.addToRank)(knight.position.rank, -2),
                },
            },
            {
                from: knight.position,
                to: {
                    file: (0, positions_1.addToFile)(knight.position.file, -1),
                    rank: (0, positions_1.addToRank)(knight.position.rank, 2),
                },
            },
            {
                from: knight.position,
                to: {
                    file: (0, positions_1.addToFile)(knight.position.file, 1),
                    rank: (0, positions_1.addToRank)(knight.position.rank, -2),
                },
            },
            {
                from: knight.position,
                to: {
                    file: (0, positions_1.addToFile)(knight.position.file, 1),
                    rank: (0, positions_1.addToRank)(knight.position.rank, 2),
                },
            },
            {
                from: knight.position,
                to: {
                    file: (0, positions_1.addToFile)(knight.position.file, 2),
                    rank: (0, positions_1.addToRank)(knight.position.rank, -1),
                },
            },
            {
                from: knight.position,
                to: {
                    file: (0, positions_1.addToFile)(knight.position.file, 2),
                    rank: (0, positions_1.addToRank)(knight.position.rank, 1),
                },
            },
        ];
        const movesWithinBoard = allMoves.filter((move) => move.to.file && move.to.rank);
        const movesWithoutOwnPieces = movesWithinBoard.filter((move) => {
            const square = board[move.to.file][move.to.rank];
            const isOwnPieceOnSquare = square && square.player === knight.player;
            return !isOwnPieceOnSquare;
        });
        return movesWithoutOwnPieces;
    }
}
exports.KnightMoveCalculator = KnightMoveCalculator;
