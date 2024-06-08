import {range} from "../_snowpack/pkg/lodash.js";
import {State} from "./state.js";
import {
  boardSize,
  getColumn,
  getSquareOfTile,
  mapBoardToBoardWithPossibleValues
} from "./utils.js";
export function solve3x3Squares(board) {
  let wasAnyProgressMade = false;
  let solvingSteps = [];
  for (let x = 0; x <= boardSize * 2 / 3; x += boardSize / 3) {
    for (let y = 0; y <= boardSize * 2 / 3; y += boardSize / 3) {
      const tiles = getSquareOfTile(board, x, y);
      const updateTilesResult = updateTiles(tiles);
      wasAnyProgressMade = wasAnyProgressMade || updateTilesResult.wasAnyProgressMade;
      solvingSteps = [...solvingSteps, ...updateTilesResult.solvingSteps];
    }
  }
  return wasAnyProgressMade;
}
export function solveRows(board) {
  let wasAnyProgressMade = board.map((row) => updateTiles(row)).some(({wasAnyProgressMade: wasAnyProgressMade2}) => wasAnyProgressMade2);
  return wasAnyProgressMade;
}
export function solveColumns(board) {
  const columns = range(0, boardSize).map((columnIndex) => getColumn(board, columnIndex));
  let wasAnyProgressMade = columns.map((columns2) => updateTiles(columns2)).some(({wasAnyProgressMade: wasAnyProgressMade2}) => wasAnyProgressMade2);
  return wasAnyProgressMade;
}
function updateTiles(tileCollection) {
  const removeResult = removeImpossibleItemsFromPossibleValues(tileCollection);
  const onlyPossibleValuesResult = checkForValuesThatArePossibleOnlyOnOneSquareInCollection(tileCollection);
  return {
    wasAnyProgressMade: removeResult.wasAnyProgressMade || onlyPossibleValuesResult.wasAnyProgressMade,
    solvingSteps: [
      ...removeResult.solvingSteps,
      ...onlyPossibleValuesResult.solvingSteps
    ]
  };
}
function removeImpossibleItemsFromPossibleValues(tileCollection) {
  let wasAnyProgressMade = false;
  let solvingSteps = [];
  const allValuesInTileCollection = tileCollection.map((tile) => tile.value).filter(Boolean);
  tileCollection.forEach((tile) => {
    const filteredPossibleValues = tile.possibleValues.filter((value) => !allValuesInTileCollection.includes(value));
    if (tile.possibleValues.length !== filteredPossibleValues.length) {
      wasAnyProgressMade = true;
    }
    tile.possibleValues = filteredPossibleValues;
  });
  tileCollection.forEach((tile) => {
    if (tile.possibleValues.length === 1) {
      wasAnyProgressMade = true;
      tile.value = tile.possibleValues[0];
      tile.possibleValues = [];
      tileCollection.forEach((_tile) => {
        _tile.possibleValues = _tile.possibleValues.filter((value) => value !== tile.value);
      });
    }
  });
  return {wasAnyProgressMade, solvingSteps};
}
function checkForValuesThatArePossibleOnlyOnOneSquareInCollection(tileCollection) {
  let wasAnyProgressMade = false;
  let solvingSteps = [];
  const possibleValues = tileCollection.flatMap((tile) => tile.possibleValues);
  const uniqueValues = possibleValues.filter((value) => {
    const occurences = possibleValues.filter((_v) => _v === value).length;
    return occurences === 1;
  });
  uniqueValues.forEach((uniqueValue) => {
    const tile = tileCollection.find((tile2) => tile2.possibleValues.includes(uniqueValue));
    const tileIndex = tileCollection.indexOf(tile);
    if (tile) {
      tile.possibleValues = [];
      tile.value = uniqueValue;
    }
  });
  return {wasAnyProgressMade, solvingSteps};
}
function recursivelyCheckForNewDiscoveries(boardWithPossibleValues) {
  const solve3x3SquaresResult = solve3x3Squares(boardWithPossibleValues);
  const solveRowsResult = solveRows(boardWithPossibleValues);
  const solveColumnsResult = solveColumns(boardWithPossibleValues);
  const progress = [solve3x3SquaresResult, solveRowsResult, solveColumnsResult];
  if (progress.some(Boolean)) {
    recursivelyCheckForNewDiscoveries(boardWithPossibleValues);
  }
  return boardWithPossibleValues;
}
export function provideSolution() {
  State.setBoardWithPossibleValues(recursivelyCheckForNewDiscoveries(State.getBoardWithPossibleValues()));
  return {
    detailedSolution: State.getBoardWithPossibleValues(),
    simpleSolution: State.getBoardWithPossibleValues().map((row) => row.map((tile) => tile.value))
  };
}
export function provideSolutionForCustomBoard(board) {
  State.setBoardWithPossibleValues(recursivelyCheckForNewDiscoveries(mapBoardToBoardWithPossibleValues(board)));
  return {
    detailedSolution: State.getBoardWithPossibleValues(),
    simpleSolution: State.getBoardWithPossibleValues().map((row) => row.map((tile) => tile.value))
  };
}
