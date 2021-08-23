// jQuery UI widget Droppable - parcialmente modificado com alguns detalhes

$( function() {
    $( "#draggable_um" ).draggable(); // permite que a div com este ID seja arrastada (pelo meio draggable)
	$( "#draggable_dois" ).draggable(); // permite que a div com este ID seja arrastada (pelo meio draggable)
    $( "#draggable_tres" ).draggable(); // permite que a div com este ID seja arrastada (pelo meio draggable)
	$( "#draggable_quatro" ).draggable(); // permite que a div com este ID seja arrastada (pelo meio draggable)
	$( "#draggable_cinco" ).draggable(); // permite que a div com este ID seja arrastada (pelo meio draggable)
    $( "#draggable_seis" ).draggable(); // permite que a div com este ID seja arrastada (pelo meio draggable)
	$( "#draggable_sete" ).draggable(); // permite que a div com este ID seja arrastada (pelo meio draggable)
	$( "#draggable_oito" ).draggable(); // permite que a div com este ID seja arrastada (pelo meio draggable)
    $( "#droppable" ).droppable({ // permite que a div com este ID receba os elementos droppeds (pelo meio droppable)
      drop: function( event, ui ) { //  quando o elemento for solto, chama a função, acontece o evento e manipulamos o UI(é um objeto jquery)
		  if (ui.draggable.attr("class").indexOf("verdadeiro") != -1){ // o indexOf faz uma varredura na classe do objeto, se não encontrar, ele retorna -1, então diferente de -1
			  ui.draggable.css({backgroundColor: "lightgreen"}) // se for diferente de -1, pinta de verde claro
		  } else {
			  ui.draggable.css({backgroundColor: "lightpink"}) // se for igual a -1 (não encontrou), pinta de vermelho claro
		  }
      }
    });
  } );
// aparece o box quando clica no título
$(document).ready(function(){
	$("#box_um").hide();
	$("#box_dois").hide();
	$("#box_tres").hide();
	$("#box_quatro").hide();
	$("#vacina_um").click(function(){
		$("#box_um").slideToggle(1000);
	});
	$("#vacina_dois").click(function(){
		$("#box_dois").slideToggle(1000);
	});
	$("#vacina_tres").click(function(){
		$("#box_tres").slideToggle(1000);
	});
	$("#vacina_quatro").click(function(){
		$("#box_quatro").slideToggle(1000);
	});
});
var dark_mode = 0;
    //Essas duas funções servem para acionar de desacionar o modo noturno
	$(document).ready(function(){
		$("#darkmode").click(function()
		{   
			if(dark_mode == 0){
				$("main").css("background-color", "black");
				$("main").css("color", "white");
				$("h3").css("color", "white");
				$("h5").css("color", "white");
				dark_mode = 1;
			}
			else{
				$("main").css("background-color", "inherit");
				$("main").css("color", "inherit");
				$("h3").css("color", "inherit");
				$("h5").css("color", "inherit");
				dark_mode = 0;
			}
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
// Para rodar a hora e aumentar / diminuir o texto:
var tamanho_letra = 16;

$(document).ready(function(){
	atualiza_hora();
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
})


// Widget de diálogo - Dialog

$( function() {
    $( "#dialog" ).dialog();
  } );