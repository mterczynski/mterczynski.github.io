"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addToFile = void 0;
const _1 = require(".");
function addToFile(file, filesToAdd) {
    if (!Number.isInteger(filesToAdd)) {
        throw new Error("filesToAdd must be an integer");
    }
    const newFile = String.fromCharCode(file.charCodeAt(0) + filesToAdd);
    if (Object.values(_1.ChessFile).includes(newFile)) {
        return newFile;
    }
    else {
        return null; // TODO - consider if throw error instead makes more sense
    }
}
exports.addToFile = addToFile;
