var botoes = document.querySelectorAll(".btn")
var resultado = document.querySelector("#resultado")


botoes.forEach(function(botao){
    botao.addEventListener("click", function(){
            var valorBotao = botao.textContent;
            

            if(valorBotao == "DEL"){
                resultado.textContent = ""
            }else{
                resultado.textContent += valorBotao
                
            }
    })
})

    


