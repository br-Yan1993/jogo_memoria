
function clicar() {
    var botao = document.getElementById('btn_a1'); 
    //botao.innerHTML = "Faustão";
    vet = ["Faustão","Eliana","Ragnarok","Vaporeon"];
    i = Math.floor(Math.random() * 4);
    botao.innerHTML = vet[i];
}


