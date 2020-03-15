'use strict';

/**
 *
 * @property {HTMLElement} board - доска
 */
const chess = {
    board: document.querySelector('.board'),
    generateBoard() {
        const rows = ['clear', 1, 2, 3, 4, 5, 6, 7, 8, 'clear'].reverse();
        const cols = ['clear', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'clear'];

        for (let row = 0; row < rows.length; row++) {
            const tr = document.createElement('tr');
            this.board.insertAdjacentElement("beforeend", tr);

            for (let col = 0; col <cols.length; col++){
                const td = document.createElement('td');
                tr.insertAdjacentElement("beforeend", td);

                if (rows[row] === 'clear' && cols[col] !== 'clear'){
                    td.innerText = cols[col];
                } else if (cols[col] === 'clear' && rows[row] !== 'clear'){
                    td.innerText = rows[row];
                }
                if((row === 0 && col === 0) || (row === 0 && col === 9) || (row === 9 && col === 0) ||
                    (row === 9 && col === 9)){
                    td.style.backgroundColor = 'green';
                } else if (row === 0 || row === 9 || col === 0 || col === 9){
                    td.style.backgroundColor = 'orange';
                } else if ((row % 2 === 0 && col % 2 !== 0 && row !== 0 && row !== 9) ||
                    (row % 2 !== 0 && col % 2 === 0 && col !== 0 && col !== 9)) {
                    td.style.backgroundColor = 'gray';
                }
                if (row === 2 && col !== 0 && col !== 9) {
                    td.innerText = '♟';
                } else if (row === 7 && col !== 0 && col !== 9 ){
                    td.innerText = '♙'
                } else if ((row === 1 && col === 1) || (row === 1 && col === 8)) {
                    td.innerText = '♜';
                } else if ((row === 1 && col === 2) || (row === 1 && col === 7)) {
                    td.innerText = '♞';
                } else if ((row === 1 && col === 3) || (row === 1 && col === 6)) {
                    td.innerText = '♝';
                } else if ((row === 1 && col === 4)) {
                    td.innerText = '♛';
                } else if ((row === 1 && col === 5)) {
                    td.innerText = '♚';
                } else if ((row === 8 && col === 1) || (row === 8 && col === 8)) {
                    td.innerText = '♖';
                } else if ((row === 8 && col === 2) || (row === 8 && col === 7)) {
                    td.innerText = '♘';
                } else if ((row === 8 && col === 3) || (row === 8 && col === 6)) {
                    td.innerText = '♗';
                } else if ((row === 8 && col === 4)) {
                    td.innerText = '♕';
                } else if ((row === 8 && col === 5)) {
                    td.innerText = '♔';
                }
            }
        }
    }
};

chess.generateBoard();