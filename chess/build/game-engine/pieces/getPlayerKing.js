"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlayerKing = void 0;
const getPlayerPieces_1 = require("./getPlayerPieces");
const PieceType_1 = require("./types/PieceType");
function getPlayerKing(player, board) {
    return (0, getPlayerPieces_1.getPlayerPieces)(board, player).find(piece => piece.type === PieceType_1.PieceType.KING);
}
exports.getPlayerKing = getPlayerKing;
