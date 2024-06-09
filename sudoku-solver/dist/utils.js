import {range} from "../snowpack/pkg/lodash.js";
export const boardSize = 9;
export function getColumn(board, columnIndex) {
  return range(0, boardSize).map((rowIndex) => board[rowIndex][columnIndex]);
}
export function mapBoardToBoardWithPossibleValues(board) {
  return board.map((row) => row.map((tile) => {
    return {
      value: tile,
      possibleValues: tile ? [] : range(1, boardSize + 1)
    };
  }));
}
export function mapBoardWithPossibleValuesToBoard(board) {
  return board.map((row) => row.map((tile) => {
    return tile.value;
  }));
}
export function getSquareOfTile(board, columnIndex, rowIndex) {
  const x = columnIndex - columnIndex % (boardSize / 3);
  const y = rowIndex - rowIndex % (boardSize / 3);
  return [
    board[y][x],
    board[y][x + 1],
    board[y][x + 2],
    board[y + 1][x],
    board[y + 1][x + 1],
    board[y + 1][x + 2],
    board[y + 2][x],
    board[y + 2][x + 1],
    board[y + 2][x + 2]
  ];
}
