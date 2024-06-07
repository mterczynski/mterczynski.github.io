"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.negatePlayer = void 0;
const Player_1 = require("../Player");
function negatePlayer(player) {
    if (player === Player_1.Player.WHITE) {
        return Player_1.Player.BLACK;
    }
    else {
        return Player_1.Player.WHITE;
    }
}
exports.negatePlayer = negatePlayer;
