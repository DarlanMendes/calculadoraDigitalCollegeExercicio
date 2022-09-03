let display = document.getElementById("display--calculadora");

function digitarNumero(id){
    let botaoPressionado= document.getElementById(id);
    let valorDigitado = botaoPressionado.value;
    introduzirConteudoDisplay(valorDigitado);  
}


function  introduzirConteudoDisplay(valorDigitado){
    if(display.innerHTML==="0"||display.innerHTML==="Erro! Comando inválido"){
        display.innerHTML="";
        display.innerHTML=valorDigitado;
        
    }
    else{
        display.innerHTML= display.innerHTML+valorDigitado;
    }
}


function calcularResultado(){
    if (display.innerHTML.includes("X")){
        let conteudoModificado =display.innerHTML.replace("X","*")
        display.innerHTML =conteudoModificado
    }
    let conteudoExpressaoDisplay = eval(display.innerHTML);
    display.innerHTML= conteudoExpressaoDisplay
}
function limparDisplay(){
    display.innerHTML="0";
}
function backspace(){
    if(display.innerHTML.length>1){
        let  conteudoParaRemoverUltimoCaracter= display.innerHTML;
        let conteudoReduzido= conteudoParaRemoverUltimoCaracter.substring(0, conteudoParaRemoverUltimoCaracter.length - 1);
        display.innerHTML=conteudoReduzido;
    }else{
        display.innerHTML="0"
    }

}
function percentual(){
    if(display.innerHTML.includes("+")||display.innerHTML.includes("-")||display.innerHTML.includes("/")){
        mostrarErro()
        return
    }else{
        let percentual = eval(display.innerHTML)*(0.01);
        display.innerHTML=percentual;
    }
}

function mostrarErro(){
    display.innerHTML="Erro! Comando inválido"
}
function inverteSinal(){
    let conteudoSinalInvertido= eval(display.innerHTML)*(-1);
    display.innerHTML= conteudoSinalInvertido;
}