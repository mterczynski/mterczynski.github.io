import {createEmptyBoardWithPossibleValues} from "./testUtils.js";
const _State = class {
  static getBoardWithPossibleValues() {
    return _State.boardWithPossibleValues;
  }
  static setBoardWithPossibleValues(boardWithPossibleValues) {
    this.boardWithPossibleValues = boardWithPossibleValues;
  }
};
export let State = _State;
State.boardWithPossibleValues = createEmptyBoardWithPossibleValues();
