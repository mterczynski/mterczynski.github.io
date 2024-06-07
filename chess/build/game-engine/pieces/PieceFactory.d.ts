import { Player } from "../Player";
import { Bishop, King, Knight, Pawn, Piece, PieceType, Queen, Rook } from "./types";
export declare function createPiece(type: PieceType, player: Player): Piece;
export declare function createPawn(player: Player): Pawn;
export declare function createKnight(player: Player): Knight;
export declare function createBishop(player: Player): Bishop;
export declare function createRook(player: Player, hasMoved?: boolean): Rook;
export declare function createQueen(player: Player): Queen;
export declare function createKing(player: Player, hasMoved?: boolean): King;
