import Ship from "./ship";

function drawBoard(board) {
  const table = document.querySelector("#player-1 table");
  for (const row of board) {
    const tr = document.createElement("tr");
    for (const cell of row) {
      const td = document.createElement("td");
      if (cell instanceof Ship) {
        td.classList = "ship";
        td.addEventListener("click", () => {
          drawAttackSuccess
        })
      }
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}

function drawAttackFail() {

}

function drawAttackSuccess() {

}

export default drawBoard;