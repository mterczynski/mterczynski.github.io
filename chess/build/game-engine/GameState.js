"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameState = void 0;
var GameState;
(function (GameState) {
    GameState["UNSTARTED"] = "UNSTARTED";
    GameState["IN_PROGRESS"] = "IN_PROGRESS";
    GameState["WHITE_WON"] = "WHITE_WON";
    GameState["BLACK_WON"] = "BLACK_WON";
    GameState["DRAW_BY_STALEMATE"] = "DRAW_BY_STALEMATE";
    GameState["DRAW_BY_INSUFFICIENT_MATERIAL"] = "DRAW_BY_INSUFFICIENT_MATERIAL";
    GameState["DRAW_BY_REPETITION"] = "DRAW_BY_REPETITION";
    GameState["DRAW_BY_50_MOVE_RULE"] = "DRAW_BY_50_MOVE_RULE";
    GameState["DRAW_BY_75_MOVE_RULE"] = "DRAW_BY_75_MOVE_RULE";
    GameState["DRAW_BY_AGREEMENT"] = "DRAW_BY_AGREEMENT";
})(GameState = exports.GameState || (exports.GameState = {}));
