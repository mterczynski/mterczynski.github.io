"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arePositionsEqual = void 0;
function arePositionsEqual(position1, position2) {
    return position1.file === position2.file && position1.rank === position2.rank;
}
exports.arePositionsEqual = arePositionsEqual;
