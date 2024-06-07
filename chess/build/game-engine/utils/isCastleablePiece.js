"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCastleablePiece = void 0;
const isCastleablePieceType_1 = require("./isCastleablePieceType");
const isCastleablePiece = (piece) => {
    return (0, isCastleablePieceType_1.isCastleablePieceType)(piece.type);
};
exports.isCastleablePiece = isCastleablePiece;
