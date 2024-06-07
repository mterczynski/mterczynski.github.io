import { Board } from "../Board";
import { Player } from "../Player";
import { Position } from "../positions";
import { King } from "./types/King";
export declare function getPlayerKing(player: Player, board: Board): King & {
    position: Position;
};
