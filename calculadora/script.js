var botoes = document.querySelectorAll(".btn")
var resultado = document.querySelector("#resultado")
var reset = document.querySelector("#btnReset")
document.getElementById("msgError").style.display = "none"

botoes.forEach(function(botao){
    botao.addEventListener("click", function(){
            var valorBotao = botao.textContent;
            var msgError = document.getElementById("msgError")
            msgError.style.display ="none"


            //utilizando o RESET para apagar tudo
            if(valorBotao == "RESET"){
                resultado.textContent = "";
            }else if(valorBotao == "DEL"){
                var delResultado = resultado.textContent
                deletar = delResultado.slice(0,-1)
                resultado.textContent = deletar
            }         
            else if(valorBotao != "="){
                    resultado.textContent += valorBotao
            }else{
                    try{
                    var display = resultado.textContent
                    display = eval(display)
                    resultado.textContent = display
                    }catch(error){
                        if(msgError.style.display == "none"){
                            msgError.style.display ="inline"
                        }
                    }
            }
            
    })
})