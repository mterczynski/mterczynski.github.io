"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createKing = exports.createQueen = exports.createRook = exports.createBishop = exports.createKnight = exports.createPawn = exports.createPiece = void 0;
const utils_1 = require("../utils");
const types_1 = require("./types");
function createPiece(type, player) {
    if ((0, utils_1.isCastleablePieceType)(type)) {
        return { type, player, hasMoved: false };
    }
    else {
        return { type, player };
    }
}
exports.createPiece = createPiece;
function createPawn(player) {
    return { type: types_1.PieceType.PAWN, player };
}
exports.createPawn = createPawn;
function createKnight(player) {
    return { type: types_1.PieceType.KNIGHT, player };
}
exports.createKnight = createKnight;
function createBishop(player) {
    return { type: types_1.PieceType.BISHOP, player };
}
exports.createBishop = createBishop;
function createRook(player, hasMoved = false) {
    return { type: types_1.PieceType.ROOK, player, hasMoved };
}
exports.createRook = createRook;
function createQueen(player) {
    return { type: types_1.PieceType.QUEEN, player };
}
exports.createQueen = createQueen;
function createKing(player, hasMoved = false) {
    return { type: types_1.PieceType.KING, player, hasMoved };
}
exports.createKing = createKing;
