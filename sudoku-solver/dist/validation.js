export function validateBoard(board) {
  const errors = [];
}
function searchForDuplicates(tileCollection) {
  return tileCollection.findIndex((tile) => {
    tileCollection.indexOf(tile) !== tileCollection.lastIndexOf(tile);
  });
}
