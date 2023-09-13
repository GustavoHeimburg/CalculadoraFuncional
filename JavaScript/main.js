//CAMPO DO VISOR DA CALCULADORA
var screen = document.querySelector('#screen');
//FUNÇÃO QUE LIMPA O VISOR DA CALCULADORA
document.querySelector('#limpar').addEventListener('click', function (){
    screen.value = '';
});