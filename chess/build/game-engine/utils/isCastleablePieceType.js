"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCastleablePieceType = void 0;
const pieces_1 = require("../pieces");
const isCastleablePieceType = (type) => {
    const castleablePieceTypes = [pieces_1.PieceType.ROOK, pieces_1.PieceType.KING];
    return castleablePieceTypes.includes(type);
};
exports.isCastleablePieceType = isCastleablePieceType;
