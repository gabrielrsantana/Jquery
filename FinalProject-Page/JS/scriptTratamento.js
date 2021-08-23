var dark_mode = 0;
var tamanho_letra = 16;
//var tamanhoFonteH2 = $('h2').css('font-size');
//var tamanhoFonteH3 = $('h3').css('font-size');

$(document).ready(function () {
  //Essas duas funções servem para acionar de desacionar o modo noturno
  $('#darkmode').click(function () {
    if (dark_mode == 0) {
      $('main').css('background-color', 'black');
      $('main').css('color', '#F2F2F2');
      dark_mode = 1;
    } else {
      $('main').css('background-color', '#F2F2F2');
      $('main').css('color', 'black');
      dark_mode = 0;
    }
  });

  //Função aumentar e diminuir o tamanho - acessibilidade
  $('#letra_aumenta').click(function () {
    if (tamanho_letra < 25) tamanho_letra += 1;
    $('html').css({ 'font-size': tamanho_letra });
    //    $('h2').css({ 'font-size': tamanhoFonteH2 });
    //    $('h3').css({ 'font-size': tamanhoFonteH3 });
  });
  $('#letra_diminui').click(function () {
    if (tamanho_letra > 10) tamanho_letra -= 1;
    $('html').css({ 'font-size': tamanho_letra });
  });

});
//Função trocar a cor de fundo dos fatos

$(document).ready(function () {
  $('div').mouseover(function () {
    $('#fatoUm, #fatoTres').css('background-color', '#f15e5e');
  });
  $('div').mouseover(function () {
    $('#fatoDois').css('background-color', 'lightgreen');
  });
  $('div').mouseout(function () {
    $('#fatoUm, #fatoDois, #fatoTres').css('background-color', '#7492b9');
  });
});

//Função verificação dos fatos
$(document).ready(function () {
  $('#fatoUm').click(function () {
    $('h3:first').text('Isso é fake!');
  });
});

//Função para alterar a imagem de Recomendações
$(document).ready(function () {
  $('#imagemRecomendacoes').hide();
  $('#btn1').click(function () {
    $('#imagemRecomendacoes').slideUp(2000);
  });
  $('#btn2').click(function () {
    $('#imagemRecomendacoes').slideDown(3000);
  });
  $('#btn3').click(function () {
    $('#imagemRecomendacoes').slideToggle();
  });
});

//Função para alterar a imagem de Recomendações
$(document).ready(function () {
	$('#imagemOqueFazer').hide();
  $('#btn4').click(function () {
    $('#imagemOqueFazer').fadeOut(500);
  });
  $('#btn5').click(function () {
    $('#imagemOqueFazer').fadeIn(2000);
  });
  $('#btn6').click(function () {
    $('#imagemOqueFazer').fadeToggle();
  });
});

// Função para mudar a cor do fundo
$(document).ready(function(){
	$("#conteudoMain1").scroll(function(){
		$("#conteudoMain1").css({backgroundColor: "#416BBF"})
	})
	$("#conteudoMain2").scroll(function(){
		$("#conteudoMain2").css({backgroundColor: "#416BBF"})
	})
	$("#conteudoMain3").scroll(function(){
		$("#conteudoMain3").css({backgroundColor: "#416BBF"})
	})
	$("#conteudoMain4").scroll(function(){
		$("#conteudoMain4").css({backgroundColor: "#416BBF"})
	})
})