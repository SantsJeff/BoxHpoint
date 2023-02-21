// obtém os dados do localStorage
var dados = JSON.parse(localStorage.getItem("dadosFormulario"));

// obtém os elementos do DOM que serão atualizados
var nome = document.querySelector("#nome");
var data = document.querySelector("#data");
var veiculo = document.querySelector("#veiculo");
var placa = document.querySelector("#placa");
var cor = document.querySelector("#cor");
var consultor = document.querySelector("#consultor");
var servico = document.querySelector("#servico");

// atualiza os elementos do DOM com os valores dos dados do formulário
nome.textContent = dados.nome;
data.textContent = dados.data;
veiculo.textContent = dados.veiculo;
placa.textContent = dados.placa;
cor.textContent = dados.cor;
consultor.textContent = dados.consultor;
servico.textContent = dados.servico;
