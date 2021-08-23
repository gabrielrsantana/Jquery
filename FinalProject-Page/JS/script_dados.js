// inicia todas colunas invisíveis, aparecem caso esteja dentro da fase informada
$(document).ready(function(){
	$("#frase_fase_atual").hide();
})

function valida_input_uti(){
	var valor_uti = parseFloat($("#input_validacao_uti").val());
	var valor_enf = parseFloat($("#input_validacao_enf").val());
	var flag_botao = true;
	if (valor_uti > 100 || valor_uti < 0 || isNaN(valor_uti)){
		alert("Não é um valor válido. Favor inserir entre 0 e 100");
		flag_botao = false;
	} 
	if (valor_enf > 100 || valor_enf < 0 || isNaN(valor_enf)){
		flag_botao = false;
	}
	if (flag_botao == false){
		$("#botao_calcula_fase").attr("disabled", "disabled");
	} else {
		$("#botao_calcula_fase").removeAttr("disabled");
	}
}

function valida_input_enf(){
	var valor_uti = parseFloat($("#input_validacao_uti").val());
	var valor_enf = parseFloat($("#input_validacao_enf").val());
	var flag_botao = true;
	if (valor_uti > 100 || valor_uti < 0 || isNaN(valor_uti)){
		flag_botao = false;
	} 
	if (valor_enf > 100 || valor_enf < 0 || isNaN(valor_enf)){
		alert("Não é um valor válido. Favor inserir entre 0 e 100");
		flag_botao = false;
	}
	if (flag_botao == false){
		$("#botao_calcula_fase").attr("disabled", "disabled");
	} else {
		$("#botao_calcula_fase").removeAttr("disabled");
	}
}

$(document).ready(function(){
	$("#input_validacao_uti").focus(function(){
		$("#input_validacao_uti").css({backgroundColor: "yellow"})
	})
	$("#input_validacao_enf").focus(function(){
		$("#input_validacao_enf").css({backgroundColor: "yellow"})
	})
	$("#input_validacao_uti").blur(function(){
		$("#input_validacao_uti").css({backgroundColor: "inherit"})
	})
	$("#input_validacao_enf").blur(function(){
		$("#input_validacao_enf").css({backgroundColor: "inherit"})
	})
	$("#input_validacao_uti").blur(valida_input_uti);
	$("#input_validacao_enf").blur(valida_input_enf)
})

function calcula_fase(){
	var valor_uti = parseFloat($("#input_validacao_uti").val());
	var valor_enf = parseFloat($("#input_validacao_enf").val());
	var media_ponderada = ((valor_uti * 2) + valor_enf) / 3;
	if (media_ponderada > 80){
		$(".fase_um").fadeTo(2000, 1.0);
		$(".fase_dois").fadeTo(2000, 0.2);
		$(".fase_tres").fadeTo(2000, 0.2);
		$(".fase_quatro").fadeTo(2000, 0.2);
		$(".fase_cinco").fadeTo(2000, 0.2);
		$("#frase_fase_atual").slideDown(1000).css({backgroundColor: "rgb(158, 0, 0)", color: "white"})
		$("#span_fase").text("vermelha");		
	} else if (media_ponderada > 70){
		$(".fase_um").fadeTo(2000, 0.2);
		$(".fase_dois").fadeTo(2000, 1.0);
		$(".fase_tres").fadeTo(2000, 0.2);
		$(".fase_quatro").fadeTo(2000, 0.2);
		$(".fase_cinco").fadeTo(2000, 0.2);
		$("#frase_fase_atual").slideDown(1000).css({backgroundColor: "rgb(179, 97, 3)", color: "white"})
		$("#span_fase").text("laranja");		
	} else if (media_ponderada > 60){
		$(".fase_um").fadeTo(2000, 0.2);
		$(".fase_dois").fadeTo(2000, 0.2);
		$(".fase_tres").fadeTo(2000, 1.0);
		$(".fase_quatro").fadeTo(2000, 0.2);
		$(".fase_cinco").fadeTo(2000, 0.2);
		$("#frase_fase_atual").slideDown(1000).css({backgroundColor: "rgb(170, 167, 0)", color: "white"})
		$("#span_fase").text("amarela");		
	} else if (media_ponderada > 50){
		$(".fase_um").fadeTo(2000, 0.2);
		$(".fase_dois").fadeTo(2000, 0.2);
		$(".fase_tres").fadeTo(2000, 0.2);
		$(".fase_quatro").fadeTo(2000, 1.0);
		$(".fase_cinco").fadeTo(2000, 0.2);
		$("#frase_fase_atual").slideDown(1000).css({backgroundColor: "rgb(30, 107, 0)", color: "white"})
		$("#span_fase").text("verde");		
	} else {
		$(".fase_um").fadeTo(2000, 0.2);
		$(".fase_dois").fadeTo(2000, 0.2);
		$(".fase_tres").fadeTo(2000, 0.2);
		$(".fase_quatro").fadeTo(2000, 0.2);
		$(".fase_cinco").fadeTo(2000, 1.0);
		$("#frase_fase_atual").slideDown(1000).css({backgroundColor: "rgb(2, 0, 107)", color: "white"})
		$("#span_fase").text("azul");		
	}
}

$(document).ready(function(){
	$("#botao_calcula_fase").click(calcula_fase)
})


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
        $("html").css("font-size", tamanho_letra);
    });
    $("#letra_diminui").click(function()
    {
        if(tamanho_letra > 16)
        tamanho_letra -= 1;
        $("html").css("font-size", tamanho_letra);
    
    });
});