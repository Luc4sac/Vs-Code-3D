const botoes = document.querySelector(".botao");

for (let i=0;i<botoes.lenght;i++){
    botoes[i].onclick=function(){
        for(j=0;j<botoes.lenght;j++){
        botoes[j].classicList.remove("ativo");
    }
    botoes[i].classList.add("ativo")
}

}