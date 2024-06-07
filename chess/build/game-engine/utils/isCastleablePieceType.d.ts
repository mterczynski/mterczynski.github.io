import { PieceType } from "../pieces";
export declare const isCastleablePieceType: (type: PieceType) => type is PieceType.KING | PieceType.ROOK;
