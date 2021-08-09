//Dados Iniciais

let square = {
    a1:'', a2:'', a3:'',
    b1:'', b2:'', b3:'',
    c1:'', c2:'', c3:''
}//as nove casas do jogo

let player = ''; //indica de quem é a vez
let warning = ''; //indica o resultado do jogo
let playing = ''; //indica se o jogo acabou ou não


//Eventos
document.querySelector('.reset').addEventListener('click', reset);

/* document.querySelector('div[data-item=a1]').addEventListener('click', itemClick);
document.querySelector('div[data-item=a2]').addEventListener('click', itemClick);
document.querySelector('div[data-item=a3]').addEventListener('click', itemClick); */
// Acima é o mesmo que está abaixo

document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', itemClick);
});


//Funcções

function itemClick(event) {
    let item  = event.target.getAttribute('data-item');
    if(square[item] === '') {
        square[item] = player;
        RenderSquare();
        togglePlayer();
    }
}

function togglePlayer() {
    player = (player === 'X') ? 'O' : 'X';
    /*if(player === 'X') {
        player = 'O';
    } else {
        player = 'X'; 
    }*/
    RenderInfor();
}

function reset() {
    warning = '';

    let random = Math.floor(Math.random() * 2); //Conta aleatória que arredonda ou para 0 ou 1
    player = (random === 0) ? 'X' : 'O' //mesma coisa do que está abaixo
    
    /*if(random === 0) {
        player = 'X';
    } else {
        player = 'O';
    }*/

    for(let i in square) {
        square[i] = '';
    } //zera os itens do quadro

    playing = true;

    RenderSquare();
    RenderInfor();

}

function RenderSquare() {
    for (let i in square) {
        let item = document.querySelector(`div[data-item=${i}]`);
        item.innerHTML = square[i];
    }

    checkGame();
}

function RenderInfor() {
    document.querySelector('.vez').innerHTML = player;
    document.querySelector('.resultado').innerHTML = warning;
}

function checkGame() {
    if(checkWinnerFor('X')) {
        warning = 'O "X" venceu!';
        playing = false; //para o jogo
    } else if(checkWinnerFor('O')) {
        warning = 'O "O" venceu!';
        playing = false;
    } else if(isFull()) {
        warning = 'Deu empate';
        playing = false;
    }
}

function checkWinnerFor(player) {
    let pos = [    // possibilidades de vitória
        'a1, a2, a3',
        'b1, b2, b3',   // horizontal
        'c1, c2, c3',

        'a1, b1, c1',
        'a2, b2, c2',   // vertical
        'a3, b3, c3',

        'a1, b2, c3',   // cruzado
        'a3, b2, c1'
    ];

    for(let w in pos) {
        let pArray = pos[w].split(','); // a1, a2, a3
        let hasWon = pArray.every(option => square[option] === player);
        if(hasWon) {
            return true;
        } 
    }

    return false;
}

function isFull() {
    for(let i in square) {
        if(square[i] === '') {
            return false;
        }
    }

return true;

}