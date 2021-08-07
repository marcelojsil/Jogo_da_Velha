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



//Funcções
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



