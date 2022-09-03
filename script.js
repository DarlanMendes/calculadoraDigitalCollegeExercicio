let display = document.getElementById("display--calculadora");
let erro=false;
function digitarNumero(id){
    teste(id)
    if(!erro){
        let botaoPressionado= document.getElementById(id);
    let valorDigitado = botaoPressionado.value;
    introduzirConteudoDisplay(valorDigitado); 
    }
    erro=false;
     
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
    if(display.innerHTML.includes("+")||display.innerHTML.includes("-")||display.innerHTML.includes("/")||display.innerHTML.includes("X")){
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

function teste(id){
    console.log(id)
    if(id==="/"||id==="X"||id==="+"||id==="-"){
    let  conteudoDisplay=display.innerHTML;

      let  ultimoCaracter=conteudoDisplay.substring(display.innerHTML.length-1,display.innerHTML.length);
    
    console.log(ultimoCaracter)
      if(ultimoCaracter==="/"
      ||ultimoCaracter==="X"
      ||ultimoCaracter==="+"
      ||ultimoCaracter==="-"){
        console.log("entrou")
          mostrarErro()
          return erro=true;
      }
    }
    
}