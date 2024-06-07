import { Piece } from "./pieces";
import { ChessFile } from "./positions";
export declare type Board = {
    [File in ChessFile]: (Piece | null)[];
};
