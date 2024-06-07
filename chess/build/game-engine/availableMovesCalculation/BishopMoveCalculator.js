"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BishopMoveCalculator = void 0;
const DiagonalMoveCalculator_1 = require("./DiagonalMoveCalculator");
class BishopMoveCalculator {
    getAvailableMovesForPieceIgnoringKingSafety(bishop, board) {
        return new DiagonalMoveCalculator_1.DiagonalMoveCalculator().getAvailableMovesOnLineIgnoringKingSafety(bishop, board);
    }
}
exports.BishopMoveCalculator = BishopMoveCalculator;
