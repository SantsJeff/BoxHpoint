// obtém o formulário e o botão de envio
var formulario = document.querySelector("form");
var botaoEnviar = document.querySelector("#enviar");

// adiciona um ouvinte de evento para o envio do formulário
formulario.addEventListener("submit", function(event) {
	event.preventDefault();

	// obtém os valores dos campos de entrada
	var nome = document.querySelector("#nome").value;
	var data = document.querySelector("#data").value;
	var veiculo = document.querySelector("#veiculo").value;
	var placa = document.querySelector("#placa").value;
	var cor = document.querySelector("#cor").value;
	var consultor = document.querySelector("#consultor").value;
	var servico = document.querySelector("#servico").value;
	var localizacao = document.querySelector("#localizacao").value; // Obtém a localização selecionada

	// cria um objeto com os dados do formulário
	var dados = {
		nome: nome,
		data: data,
		veiculo: veiculo,
		placa: placa,
		cor: cor,
		consultor: consultor,
		servico: servico,
		localizacao: localizacao // Adiciona a localização ao objeto de dados
	};

	// salva os dados no localStorage
	localStorage.setItem("dadosFormulario", JSON.stringify(dados));

	// redireciona o usuário para a página de exibição de dados
	window.location.href = "exibir-dados.html";
});
