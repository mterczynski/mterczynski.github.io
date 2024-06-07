"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapFileToFileIndex = void 0;
function mapFileToFileIndex(file) {
    return file.charCodeAt(0) - "A".charCodeAt(0);
}
exports.mapFileToFileIndex = mapFileToFileIndex;
