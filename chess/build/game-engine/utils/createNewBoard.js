"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewBoard = void 0;
const pieces_1 = require("../pieces");
const PieceFactory_1 = require("../pieces/PieceFactory");
const Player_1 = require("../Player");
const positions_1 = require("../positions");
function createNewBoard() {
    const createSymetricalFile = (pieceType) => {
        return [
            null,
            (0, PieceFactory_1.createPiece)(pieceType, Player_1.Player.WHITE),
            (0, PieceFactory_1.createPawn)(Player_1.Player.WHITE),
            null,
            null,
            null,
            null,
            (0, PieceFactory_1.createPawn)(Player_1.Player.BLACK),
            (0, PieceFactory_1.createPiece)(pieceType, Player_1.Player.BLACK),
        ];
    };
    return {
        [positions_1.ChessFile.A]: createSymetricalFile(pieces_1.PieceType.ROOK),
        [positions_1.ChessFile.B]: createSymetricalFile(pieces_1.PieceType.KNIGHT),
        [positions_1.ChessFile.C]: createSymetricalFile(pieces_1.PieceType.BISHOP),
        [positions_1.ChessFile.D]: createSymetricalFile(pieces_1.PieceType.QUEEN),
        [positions_1.ChessFile.E]: createSymetricalFile(pieces_1.PieceType.KING),
        [positions_1.ChessFile.F]: createSymetricalFile(pieces_1.PieceType.BISHOP),
        [positions_1.ChessFile.G]: createSymetricalFile(pieces_1.PieceType.KNIGHT),
        [positions_1.ChessFile.H]: createSymetricalFile(pieces_1.PieceType.ROOK),
    };
}
exports.createNewBoard = createNewBoard;
