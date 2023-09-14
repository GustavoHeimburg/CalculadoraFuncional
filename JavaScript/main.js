//CAMPO DO VISOR DA CALCULADORA

var screen = document.querySelector('#screen');

//FUNÇÃO QUE LIMPA O VISOR DA CALCULADORA

document.querySelector('#limpar').addEventListener('click', function (){
    screen.value = '';
});

//FUNÇÃO QUE DELETA OS VALORES DA TELA DA CALCULADORA

document.querySelector('#deletar').addEventListener('click', function (){
   screen.value = screen.value.substring(0,(screen.value.length -1));
});

//FUNÇÃO QUE RECEBE O CLIQUE DO BOTÃO E COLOCA NA TELA DA CALCULADORA

const operatorsDefault = ['*', '+', '-', '/', ',', '.'];

function addToScreen(value){

    screen.value +=value;

    if (operatorsDefault.includes(value)){
        var valueprevious = screen.value.length -2;
        if (operatorsDefault.includes(screen.value[valueprevious])){
            screen.value = screen.value.substring(0,(screen.value.length -2));
            screen.value = screen.value + value
        if (operatorsDefault.values(1)){
            screen.value = valueprevious
        }

//CASO A OPERAÇÃO INICIO COM OS OPERADORES DEIXA O CAMPO VAZIO
        }
        switch (screen.value[0]){
            case '*':
                screen.value = '';
            case '/':
                screen.value = '';
            case '.':
                screen.value = '';
            case '-':
                screen.value = '';
            case '+':
                screen.value = '';
        }
    }
}

//FUNÇÃO QUE REALIZA O RESULTADO DOS CALCULOS
function resultado(){
    if (operatorsDefault.includes(screen.value[screen.value.length -1])){
        screen.value = "0"
    }else {
        screen.value = eval(screen.value);
    }
}