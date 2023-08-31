var botoes = document.querySelectorAll(".btn")
var resultado = document.querySelector("#resultado")

botoes.forEach(function(botao){

    botao.addEventListener("click", function(){
    console.log("Estou entrando aqui")

    var valorBotao = botao.textContent;

    resultado.textContent = valorBotao 
    })
})