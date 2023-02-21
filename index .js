// obtém o formulário de login e adiciona um listener para o evento submit
var formLogin = document.querySelector("#form-login");
formLogin.addEventListener("submit", function(event) {
	// evita que a página seja recarregada
	event.preventDefault();

	// obtém o valor do campo de senha
	var password = document.querySelector("#password").value;

	// verifica se a senha atende aos requisitos de segurança
	if (!validarSenha(password)) {
		alert("A senha deve ter no máximo 10 caracteres, incluindo uma letra maiúscula, um número e um caractere especial.");
		return;
	}

	// redireciona para a página do formulário
	window.location.href = "formulario.html";
});

// função para validar a senha
function validarSenha(senha)
