const botoes = document.querySelector(".botao");

for (let i=0;i<botoes.lenght;i++){
    botoes[i].onclick=function(){
        botoes[i].classicList.add("ativo");
    }
}