"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapRankIndexToRank = void 0;
const Game_1 = require("../Game");
const mapRankIndexToRank = (index) => {
    if (index < 0 || index > Game_1.Game.boardSize - 1) {
        throw new Error("Invalid index");
    }
    return (index + 1);
};
exports.mapRankIndexToRank = mapRankIndexToRank;
