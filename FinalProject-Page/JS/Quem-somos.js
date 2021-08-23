var dark_mode = 0;
var tamanho_letra = 16;

// O vídeo começa escondido e só aparece quando é chamado pela função
$(".img_main").last().hide()

$(document).ready(function () {
	atualiza_hora()
// pagina Quem somos 
        $("#texto").slideDown(2000);
        $("#imagem1").slideDown(2000);
        $("#imagem2").slideDown(2000);


    //Essas duas funções servem para acionar de desacionar o modo noturno
    $("#darkmode").click(function()
    {   
        if(dark_mode == 0){
            $("main").css("background-color", "black")
            $("main").css("color", "#F2F2F2")
            dark_mode = 1;
        }
        else{
            $("main").css("background-color", "#F2F2F2")
            $("main").css("color", "black")
            dark_mode = 0;
        }
    });

    //Função aumentar e diminuir o tamanho - acessibilidade
    $("#letra_aumenta").click(function()
    {
        if(tamanho_letra < 25)
        tamanho_letra += 1;
        $("html").css("font-size", tamanho_letra)
    });
    $("#letra_diminui").click(function()
    {
        if(tamanho_letra > 16)
        tamanho_letra -= 1;
        $("html").css("font-size", tamanho_letra)
    
    });
	function atualiza_hora(){
		var d = new Date();
		// dia = d.getDate();
		// mes = d.getMonth() + 1;
		// ano = d.getFullYear();
		// hora = d.getHours();
		// minuto = d.getMinutes();
		// document.getElementById("data").innerHTML = (dia + " / " + mes + " / " + ano + "  " + hora + ":" + minuto)
		$("#data").text(d.toLocaleString());
		setTimeout(atualiza_hora, 1000);
	}

    //Essas funções abaixo NÃO fazem parte do cabeçalho e do rodapé, é da main da página HOME
   
    //Essas duas função servem para alterar a imagem da main quando passamos o mouse
    $(".img_main").first().mouseenter(function () {
        $(this).attr("src","Imagens/slide2.jpeg");
    });
    $(".img_main").first().mouseleave(function () {
        $(this).attr("src","Imagens/slide3.jpeg");
    });  
    //Essas duas funções servem para em um click esconder a foto e aparecer o vídeo no lugar da foto, com 2 clicks volta a imagem
    $(".img_main").eq(1).click(function () {  
        $(this).hide()
        $(".img_main").last().show()
    });
    $(".img_main").last().mouseleave(function () {
        
        $(this).hide()
        $(".img_main").eq(1).show()
    });
});

