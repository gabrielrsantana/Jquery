var dark_mode = 0;
var tamanho_letra = 16;
// tam fonte cassousel
var tam_fonte_galeria=18;
var tam_fonte_galeria_pagina=12;

// O vídeo começa escondido e só aparece quando é chamado pela função
$(".img_main").last().hide()

$(document).ready(function () {

    //Essas duas funções servem para acionar de desacionar o modo noturno
    $("#darkmode").click(function()
    {   
        if(dark_mode == 0){
            $("main").css("background-color", "black")
            $("main").css("color", "#F2F2F2")
            dark_mode = 1;
            // dark mode do header pagina protocolo   ############################################ Gabriel Rocha
            $("header").css("background-image","linear-gradient(#0E2F59, #36486d)");
            $("footer").css("background-image","linear-gradient(#0E2F59, #36486d)");
            //Fim dark mode do header pagina protocolo
        }
        else{
            $("main").css("background-color", "inherit")
            $("main").css("color", "inherit")
            //dark mode pagina procotolo ,volta background image original  ##################### gabriel rocha
            $("header").css("background-image","linear-gradient(#0E2F59, #416BBF)");
            $("footer").css("background-image","linear-gradient(#0E2F59, #416BBF)");
            dark_mode = 0;
        }
    });

    //Função aumentar e diminuir o tamanho - acessibilidade
    $("#letra_aumenta").click(function()
    {
        if(tamanho_letra < 25)
        tamanho_letra += 1;
        $("html").css("font-size", tamanho_letra)
    // #################################teste para aumentar a setinha da galeria de fotos ####################
       if(tam_fonte_galeria<35){
        tam_fonte_galeria+= 5;
        $(".next").css({fontSize:tam_fonte_galeria}); //bt >
        $(".prev").css({fontSize:tam_fonte_galeria});// bt <
       }
       if(tam_fonte_galeria_pagina< 20){
           tam_fonte_galeria_pagina += 2;
         $(".numbertext").css({fontSize:tam_fonte_galeria_pagina });
       }
       
        //###################################fim teste galeria ###################################################
    });
    $("#letra_diminui").click(function()
    {
        if(tamanho_letra > 18)
        tamanho_letra -= 1;
        $("html").css("font-size", tamanho_letra)
    // #################################teste para DIMINUIR a setinha da galeria de fotos ####################
    if(tam_fonte_galeria > 12){
        tam_fonte_galeria-= 5;
        $(".next").css({fontSize:tam_fonte_galeria}); //bt >
        $(".prev").css({fontSize:tam_fonte_galeria});// bt <
       }
       if(tam_fonte_galeria_pagina > 9){
           tam_fonte_galeria_pagina -= 2;
         $(".numbertext").css({fontSize:tam_fonte_galeria_pagina });
       }
    //###################################fim teste galeria ###################################################
    });

    //Atualiza data e hora
    atualiza_hora();


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
