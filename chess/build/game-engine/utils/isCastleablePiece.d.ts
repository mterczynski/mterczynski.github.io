import { Piece, King, Rook } from "../pieces";
export declare const isCastleablePiece: (piece: Piece) => piece is King | Rook;
