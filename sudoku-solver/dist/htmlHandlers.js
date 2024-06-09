import Joi from "../snowpack/pkg/joi.js";
import JSON5 from "../snowpack/pkg/json5.js";
import {
  provideSolution,
  solve3x3Squares,
  solveColumns,
  solveRows
} from "./solvers.js";
import {State} from "./state.js";
import {
  boardSize,
  mapBoardToBoardWithPossibleValues,
  mapBoardWithPossibleValuesToBoard
} from "./utils.js";
import {sudokus} from "./sudokus.js";
import {createEmptyBoardWithPossibleValues} from "./testUtils.js";
export function generateBoard() {
  const board = document.getElementById("board");
  for (let i = 0; i < boardSize; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    board.appendChild(row);
    for (let j = 0; j < boardSize; j++) {
      const tile = document.createElement("div");
      tile.classList.add("tile");
      row.appendChild(tile);
      const input = document.createElement("input");
      input.classList.add("tile-input");
      input.setAttribute("maxlength", "1");
      input.setAttribute("pattern", "d");
      tile.addEventListener("input", () => {
        State.setBoardWithPossibleValues(mapBoardToBoardWithPossibleValues(parseBoardHTMLToArray()));
      });
      tile.appendChild(input);
    }
  }
}
export function parseBoardHTMLToArray() {
  const rows = Array.from(document.getElementsByClassName("row"));
  const data = rows.map((row) => {
    const tiles = Array.from(row.children);
    return tiles.map((tile) => {
      const input = tile.querySelector(".tile-input");
      return Number(input.value);
    });
  });
  const flatData = data.flat();
  if (flatData.includes(NaN)) {
    throw new Error("Incorrect value provided in one of the inputs");
  }
  return data;
}
export function addButtonClickHandlers() {
  addFillFromJsonClickHandler();
  addClearButtonHandler();
  addSolveButtonsClickHandlers();
}
export function getHTMLTileInput(rowIndex, columnIndex) {
  return document.querySelector(`.board > :nth-child(${rowIndex}) > :nth-child(${columnIndex}) .tile-input`);
}
export function renderData(data) {
  data.forEach((row, rowIndex) => {
    row.forEach((tileValue, columnIndex) => {
      const htmlTile = getHTMLTileInput(rowIndex + 1, columnIndex + 1);
      if (tileValue === 0) {
        htmlTile.value = "";
      } else {
        htmlTile.value = tileValue + "";
      }
    });
  });
}
function addFillFromJsonClickHandler() {
  const button = document.getElementById("button-fill-from-json");
  button?.addEventListener("click", async () => {
    const defaultPromptValue = JSON.stringify(sudokus.medium());
    const promptResult = window.prompt(`The input accepts ${boardSize}x${boardSize} array of numbers`, defaultPromptValue);
    const filteredPromptResult = promptResult.replace(/\n/g, "").replace(/\r/g, "");
    const userInput = JSON5.parse(filteredPromptResult);
    const schema = Joi.array().length(boardSize).items(Joi.array().length(boardSize).items(Joi.number().integer().min(0).max(boardSize).required()).required()).required();
    try {
      const data = await Joi.attempt(userInput, schema);
      renderData(data);
      State.setBoardWithPossibleValues(mapBoardToBoardWithPossibleValues(data));
    } catch (error) {
      alert(`Invalid data ${error}`);
    }
  });
}
function addClearButtonHandler() {
  const button = document.getElementById("button-clear");
  button?.addEventListener("click", async () => {
    const data = mapBoardWithPossibleValuesToBoard(createEmptyBoardWithPossibleValues());
    renderData(data);
    State.setBoardWithPossibleValues(mapBoardToBoardWithPossibleValues(data));
  });
}
function addSolveButtonsClickHandlers() {
  const solveButton = document.getElementById("button-solve");
  solveButton.addEventListener("click", () => {
    try {
      provideSolution();
      renderData(mapBoardWithPossibleValuesToBoard(State.getBoardWithPossibleValues()));
    } catch (err) {
      return window.alert("Incorrect value provided in one of the inputs");
    }
  });
  const solveColumnsButton = document.getElementById("button-solve-columns");
  solveColumnsButton.addEventListener("click", () => {
    solveColumns(State.getBoardWithPossibleValues());
    renderData(mapBoardWithPossibleValuesToBoard(State.getBoardWithPossibleValues()));
  });
  const solveRowsButton = document.getElementById("button-solve-rows");
  solveRowsButton.addEventListener("click", () => {
    solveRows(State.getBoardWithPossibleValues());
    renderData(mapBoardWithPossibleValuesToBoard(State.getBoardWithPossibleValues()));
  });
  const solveSquaresButton = document.getElementById("button-solve-squares");
  solveSquaresButton.addEventListener("click", () => {
    solve3x3Squares(State.getBoardWithPossibleValues());
    renderData(mapBoardWithPossibleValuesToBoard(State.getBoardWithPossibleValues()));
  });
}
