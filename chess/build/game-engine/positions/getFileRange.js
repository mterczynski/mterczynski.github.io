"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFileRange = void 0;
const addToFile_1 = require("./addToFile");
/** @param `inclusive` - informs whether from and to should be included in returned file range */
const getFileRange = (from, to, { inclusive = true } = {}) => {
    if (from === to) {
        if (inclusive) {
            return [from];
        }
        else {
            return [];
        }
    }
    const smallerFile = from.localeCompare(to) === -1 ? from : to;
    const biggerFile = from.localeCompare(to) === -1 ? to : from;
    const files = [];
    let currentFile = smallerFile;
    while (currentFile && currentFile !== biggerFile) {
        files.push(currentFile);
        currentFile = (0, addToFile_1.addToFile)(currentFile, 1);
    }
    files.push(biggerFile);
    if (!inclusive) {
        return files
            .filter(file => file !== from)
            .filter(file => file !== to);
    }
    return files;
};
exports.getFileRange = getFileRange;
