function tecla(numero){
    var num = document.querySelector("div#result").innerHTML;
    document.querySelector("div#result").innerHTML = num + numero;
}
function resetar(){
    document.querySelector("div#result").innerHTML = "";
}
function apagar(){
    var result = document.querySelector("div#result").innerHTML;
    document.querySelector("div#result").innerHTML = result.substring(0, result.length -1);
}
function calcular(){
    var result = document.querySelector("div#result").innerHTML;
    if(result){
        document.querySelector("div#result").innerHTML = eval(result);
    }
}