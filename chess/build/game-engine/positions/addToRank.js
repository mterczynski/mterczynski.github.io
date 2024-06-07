"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addToRank = void 0;
const Game_1 = require("../Game");
function addToRank(currentRank, ranksToAdd) {
    if (!Number.isInteger(ranksToAdd)) {
        throw new Error('ranksToAdd must be an integer');
    }
    const newRank = currentRank + ranksToAdd;
    if (newRank >= 1 && newRank <= Game_1.Game.boardSize) {
        return newRank;
    }
    else {
        return null;
    }
}
exports.addToRank = addToRank;
