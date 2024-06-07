"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckCalculator = void 0;
const getPlayerKing_1 = require("../pieces/getPlayerKing");
const positions_1 = require("../positions");
class CheckCalculator {
    /** get pieces that create checks */
    getCheckingEnemyPieces(currentPlayer, board, availableEnemyMovesIgnoringKingSafety) {
        const currentPlayerKing = (0, getPlayerKing_1.getPlayerKing)(currentPlayer, board);
        const movesCheckingCurrentPlayerKing = availableEnemyMovesIgnoringKingSafety.filter(move => (0, positions_1.arePositionsEqual)(move.to, currentPlayerKing.position));
        const distinctAttackerPositions = movesCheckingCurrentPlayerKing.map(move => move.from); // a single piece can have max one check on king
        return distinctAttackerPositions.map(position => {
            const piece = board[position.file][position.rank];
            return Object.assign(Object.assign({}, piece), { position });
        });
    }
}
exports.CheckCalculator = CheckCalculator;
