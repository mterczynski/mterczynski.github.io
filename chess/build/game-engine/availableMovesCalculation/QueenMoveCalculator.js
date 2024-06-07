"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueenMoveCalculator = void 0;
const DiagonalMoveCalculator_1 = require("./DiagonalMoveCalculator");
const LineMoveCalculator_1 = require("./LineMoveCalculator");
class QueenMoveCalculator {
    getAvailableMovesForPieceIgnoringKingSafety(queen, board) {
        return [
            ...new LineMoveCalculator_1.LineMoveCalculator().getAvailableMovesOnLineIgnoringKingSafety(queen, board),
            ...new DiagonalMoveCalculator_1.DiagonalMoveCalculator().getAvailableMovesOnLineIgnoringKingSafety(queen, board),
        ];
    }
}
exports.QueenMoveCalculator = QueenMoveCalculator;
