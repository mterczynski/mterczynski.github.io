"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFileDifference = void 0;
function getFileDifference(file1, file2) {
    return file2.charCodeAt(0) - file1.charCodeAt(0);
}
exports.getFileDifference = getFileDifference;
