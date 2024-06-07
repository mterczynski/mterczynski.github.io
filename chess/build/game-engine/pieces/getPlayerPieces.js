"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlayerPieces = void 0;
function getPlayerPieces(board, player) {
    const pieces = Object.entries(board).flatMap(([fileName, fileContent]) => {
        return fileContent.map((piece, rank) => (piece === null ? null : Object.assign(Object.assign({}, piece), { position: {
                file: fileName,
                rank,
            } }))).filter((square) => !!square);
    });
    return pieces.filter(piece => piece.player === player);
}
exports.getPlayerPieces = getPlayerPieces;
