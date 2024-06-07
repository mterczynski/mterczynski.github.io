"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiagonalMoveCalculator = void 0;
const utils_1 = require("../utils");
const positions_1 = require("../positions");
class DiagonalMoveCalculator {
    getAvailableMovesOnLineIgnoringKingSafety(piece, board) {
        const diagonals = [
            { fileIncrement: -1, rankIncrement: -1 },
            { fileIncrement: -1, rankIncrement: 1 },
            { fileIncrement: 1, rankIncrement: -1 },
            { fileIncrement: 1, rankIncrement: 1 },
        ];
        return diagonals.flatMap(diag => this.getAvailableMovesForDiagonal(piece, board, diag));
    }
    getAvailableMovesForDiagonal(piece, board, diagonal) {
        const availableMoves = [];
        let nextFile = (0, positions_1.addToFile)(piece.position.file, diagonal.fileIncrement);
        let nextRank = (0, positions_1.addToRank)(piece.position.rank, diagonal.rankIncrement);
        let iteration = 1;
        while (nextFile && nextRank) {
            const nextSquare = board[nextFile][nextRank];
            if (!nextSquare) {
                availableMoves.push({
                    from: piece.position,
                    to: { file: nextFile, rank: nextRank }
                });
            }
            else if (nextSquare.player === (0, utils_1.negatePlayer)(piece.player)) {
                availableMoves.push({
                    from: piece.position,
                    to: { file: nextFile, rank: nextRank }
                });
                break;
            }
            else {
                break;
            }
            iteration++;
            nextFile = (0, positions_1.addToFile)(piece.position.file, diagonal.fileIncrement * iteration);
            nextRank = (0, positions_1.addToRank)(piece.position.rank, diagonal.rankIncrement * iteration);
        }
        return availableMoves;
    }
}
exports.DiagonalMoveCalculator = DiagonalMoveCalculator;
