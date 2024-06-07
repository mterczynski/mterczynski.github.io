"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapIndexToChessFile = void 0;
const Game_1 = require("../Game");
const index_1 = require("./index");
const mapIndexToChessFile = (index) => {
    if (index < 0 || index > Game_1.Game.boardSize - 1) {
        throw new Error('Invalid index');
    }
    return [...Object.values(index_1.ChessFile)][index];
};
exports.mapIndexToChessFile = mapIndexToChessFile;
