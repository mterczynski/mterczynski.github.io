import {boardSize} from "./utils.js";
function createTileWithPossibleValues(value) {
  return {
    value,
    possibleValues: value ? [] : [1, 2, 3, 4, 5, 6, 7, 8, 9]
  };
}
export function createEmptyBoardWithPossibleValues() {
  return Array(boardSize).fill(null).map(() => Array(boardSize).fill(null).map(() => createTileWithPossibleValues(0)));
}
