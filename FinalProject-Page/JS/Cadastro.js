var dark_mode = 0;
var tamanho_letra = 16;
var progresso = 0;
var cont_input_valido = cont_select_valido = 0;
$("#bt_enviar").prop("disabled", true)
$(".gestante").hide()
$("#outras_comorbidade").hide()


$(document).ready(function () {

    //Essas duas funções servem para acionar de desacionar o modo noturno
    $("#darkmode").click(function () {
        if (dark_mode == 0) {
            $("main").css("background-color", "black")
            $("*").css("color", "#F2F2F2")
            dark_mode = 1;
        }
        else {
            $("main").css("background-color", "#F2F2F2")
            $("*").css("color", "#0E2F59")
            $(".menu li a").css("color", "#F2F2F2")
            $("footer *").css("color", "#F2F2F2")
            dark_mode = 0;
        }
    });

    //Função aumentar e diminuir o tamanho - acessibilidade
    $("#letra_aumenta").click(function () {
        if (tamanho_letra < 25)
            tamanho_letra += 1;
        $("html").css("font-size", tamanho_letra)
    });
    $("#letra_diminui").click(function () {
        if (tamanho_letra > 16)
            tamanho_letra -= 1;
        $("html").css("font-size", tamanho_letra)
    });

    //Função para mudar a imagem
    $(".img_cadastro").mouseenter(function () {
        $(this).attr("src", "Imagens/cadastro.jpg");
    });
    $(".img_cadastro").eq(0).mouseleave(function () {
        $(this).attr("src", "Imagens/fila vacina1.jpg");
    });
    $(".img_cadastro").eq(1).mouseleave(function () {
        $(this).attr("src", "Imagens/fila vacina2.jpg");
    });
    $(".img_cadastro").eq(2).mouseleave(function () {
        $(this).attr("src", "Imagens/fila vacina3.jpg");
    });

    atualiza_hora();

    $("#progressbar").progressbar({ 
        max: 10,  
        complete: function( event, ui ) {$("#bt_enviar").prop("disabled", false)}
    });

    $(".input_form").blur(function () { validar_formulario() })

    $("#bt_enviar").click(function () {

        if (verifica_prioridade()) {
            $(".divs_conteudo").eq(2).text("Você faz parte do grupo prioritário, pode ir se vacinar em um ponto de vacinação.")
        } else {
            $(".divs_conteudo").eq(2).text("Você NÃO faz parte do grupo prioritário. Aguarde na fila!")
        }
    });
});

function atualiza_hora() {
    var d = new Date();
    $("#data").text(d.toLocaleString());
    setTimeout(atualiza_hora, 1000);
}
function tornar_valido(elemento_alvo) {
    $(elemento_alvo).removeClass("invalido")
    $(elemento_alvo).addClass("valido")
}
function tornar_invalido(elemento_alvo) {
    $(elemento_alvo).removeClass("valido")
    $(elemento_alvo).addClass("invalido")
}
function validar_data(elemento_alvo) {

    if ($(elemento_alvo).val().length == 0)
        return
    const data_nascimento = new Date($(elemento_alvo).val());
    const data_atual = new Date();

    if (data_nascimento > data_atual || data_nascimento < data_atual.setFullYear(data_atual.getFullYear() - 130))
        tornar_invalido(elemento_alvo)
    else {
        tornar_valido(elemento_alvo)
        cont_input_valido += 1;
    }
}
function validar_comorbidade(elemento_alvo) {
    var comorbidade = $(elemento_alvo).val()
    if (comorbidade == "26")
        $("#outras_comorbidade").show()
    if (comorbidade != "26")
        $("#outras_comorbidade").hide()
    validar_select(elemento_alvo)
}
function validar_sexo(elemento_alvo) {
    var sexo = $(elemento_alvo).val()
    if (sexo == "feminino")
        $(".gestante").show()
    if (sexo == "masculino")
        $(".gestante").hide()

    validar_select(elemento_alvo)
}
function validar_cpf(elemento_alvo) {
    if (!($(elemento_alvo).val()))
        return
    var cpf = $(elemento_alvo).val();

    if (cpf.length != 11)
        tornar_invalido(elemento_alvo)
    else {
        tornar_valido(elemento_alvo)
        cont_input_valido += 1;
    };
}
function validar_nome(elemento_alvo) {
    if (!($(elemento_alvo).val()))
        return
    if ($(elemento_alvo).val().length > 1) {
        tornar_valido(elemento_alvo)
        cont_input_valido += 1;
    }
    else
        tornar_invalido(elemento_alvo)
}
function validar_numero(elemento_alvo) {
    if (!($(elemento_alvo).val()))
        return
    const valor = $(elemento_alvo).val()

    if (valor == "" || parseFloat(valor) < 0)
        tornar_invalido(elemento_alvo)
    else {
        tornar_valido(elemento_alvo)
        cont_input_valido += 1
    }
}
function validar_select(elemento_alvo) {
    if ($(elemento_alvo).val() == "")
        return
    cont_select_valido += 1;
}
function atribuir_progresso() {
    const total_progresso = cont_input_valido + cont_select_valido
    $("#progressbar").progressbar({ value: total_progresso })
}
function validar_formulario() {
    cont_input_valido = 0
    cont_select_valido = 0

    validar_nome($(".input_form[name='nome']"))
    validar_cpf($(".input_form[name='cpf']"))
    validar_data($(".input_form[name='data de nascimento']"))
    validar_numero($(".input_form[name='peso']"))
    validar_numero($(".input_form[name='altura']"))
    validar_numero($(".input_form[name='cartao_sus']"))
    validar_select($(".input_form[name='profissao']"))
    validar_sexo($(".input_form[name='sexo']"))
    validar_select($(".input_form[name='raca']"))
    validar_comorbidade($(".input_form[name='comorbidade']"))

    atribuir_progresso()
}
function calcular_imc() {
    const peso = parseFloat($(".input_form[name='peso']").val())
    const altura = parseFloat($(".input_form[name='altura']").val())
    const imc = peso / (altura * altura)
    return imc
}
function calcular_idade() {
    const data_atual = new Date()
    const data_nascimento = new Date($(".input_form[name='data de nascimento']").val())

    const idade = data_atual.getFullYear() - data_nascimento.getFullYear()
    console.log(idade)
    return idade
}
function verifica_prioridade() {
    if (
        $(".input_form[name='comorbidade']").val() != 27
        || $(".input_form[name='profissao']").val() != 7
        || calcular_imc() >= 40
        || $(".gestante").is(':checked')
        || $(".quilombola").is(':checked')
        || calcular_idade() >= 60
    )
        return true;
    return false;
}
