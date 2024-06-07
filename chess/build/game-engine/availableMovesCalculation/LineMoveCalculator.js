"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineMoveCalculator = void 0;
const positions_1 = require("../positions");
const utils_1 = require("../utils");
class LineMoveCalculator {
    getAvailableMovesOnLineIgnoringKingSafety(piece, board) {
        const lines = [
            { fileIncrement: -1, rankIncrement: 0 },
            { fileIncrement: 1, rankIncrement: 0 },
            { fileIncrement: 0, rankIncrement: -1 },
            { fileIncrement: 0, rankIncrement: 1 }, // top
        ];
        return lines.flatMap(line => this.getAvailableMovesForLine(piece, board, line));
    }
    getAvailableMovesForLine(piece, board, line) {
        const availableMoves = [];
        let nextFile = (0, positions_1.addToFile)(piece.position.file, line.fileIncrement);
        let nextRank = (0, positions_1.addToRank)(piece.position.rank, line.rankIncrement);
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
            nextFile = (0, positions_1.addToFile)(piece.position.file, line.fileIncrement * iteration);
            nextRank = (0, positions_1.addToRank)(piece.position.rank, line.rankIncrement * iteration);
        }
        return availableMoves;
    }
}
exports.LineMoveCalculator = LineMoveCalculator;
