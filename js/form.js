/** @format */

	var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click', function (event)
{
	event.preventDefault();
	var form = document.querySelector('#form-adiciona');
	var paciente = obterPacienteDoFormulario(form);
	var pacienteTr = montaTr(paciente);

	var erros = validaPaciente(paciente);
	if (erros.length > 0) {
	
		exibeMensagensDeErro(erros);
		return;
	}

	adicionaPacienteNaTabela(paciente);

	
	form.reset();
	
	if (!validaPaciente(paciente)) {
		console.log('Paciente invalido');
		return; // o return vazio nao adiciona na tabela
	}

	var tabela = document.querySelector('#tabela-pacientes');
	tabela.appendChild(pacienteTr);

	
	var mensagensErro = document.querySelector('#mensagens-erro');
	mensagensErro.innerHTML = "";
});

function exibeMensagensDeErro(erros) {
	var ul = document.querySelector('#mensagens-erro');
	ul.innerHTML = "";

	erros.forEach(function(erro) {
		var li = document.createElement('li');
		li.textContent = erro;
		ul.appendChild(li);
		
	});
	
}
function obterPacienteDoFormulario(form) {
	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value),
	};
	return paciente;
}

function montaTr(paciente) {
	var pacienteTr = document.createElement('tr');
	pacienteTr.classList.add('paciente');

	pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
	pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
	pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
	pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
	pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));

	return pacienteTr;
}

function montaTd(dado, classe) {
	var td = document.createElement('td');
	td.textContent = dado;
	td.classList.add(classe);

	return td;
}

function validaPaciente(paciente) {
	var erros = [];

	if (paciente.nome.length == 0) erros.push('O nome não pode ser em branco');
	if (paciente.gordura.length == 0) erros.push('A gordura não pode ser em branco');
	if (paciente.peso.length == 0) erros.push('O peso não pode ser em branco');
	if (paciente.altura.length == 0) erros.push('O altura não pode ser em branco');

	if (!validaPeso(paciente.peso)) erros.push('O Peso é inválido !');

	if (!validaAltura(paciente.altura)) erros.push(' Altura é inválida!');

	return erros;
}

//funçao para buscar os paciente via api ultilizando o modo ajax

	function adicionaPacienteNaTabela(paciente) {
		var pacienteTr = montaTr(paciente);
		var tabela = document.querySelector('#tabela-pacientes');
		tabela.appendChild(pacienteTr);
	}




// var pesoTd = document.createElement('td');
// pesoTd.classList.add('info-peso');
// var alturaTd = document.createElement('td');
// alturaTd.classList.add('info-altura');
// var gorduraTd = document.createElement('td');
// gorduraTd.classList.add('info-gordura');
// var imcTd = document.createElement('td');
// imcTd.classList.add('info-imc');

// nomeTd.textContent = paciente.nome; //colocando os nomes dentro da td
// pesoTd.textContent = paciente.peso;
// alturaTd.textContent = paciente.altura;
// gorduraTd.textContent = paciente.gordura;
// imcTd.textContent = paciente.imc;
