"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCastlingMove = void 0;
const Moves_1 = require("../Moves");
function isCastlingMove(move) {
    return move.type === Moves_1.SpecialMoveType.CASTLING;
}
exports.isCastlingMove = isCastlingMove;
