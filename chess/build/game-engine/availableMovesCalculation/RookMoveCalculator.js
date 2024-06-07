"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RookMoveCalculator = void 0;
const LineMoveCalculator_1 = require("./LineMoveCalculator");
class RookMoveCalculator {
    getAvailableMovesForPieceIgnoringKingSafety(rook, board) {
        return new LineMoveCalculator_1.LineMoveCalculator().getAvailableMovesOnLineIgnoringKingSafety(rook, board);
    }
}
exports.RookMoveCalculator = RookMoveCalculator;
