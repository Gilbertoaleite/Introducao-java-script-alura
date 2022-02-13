/** @format */

var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click', function (event) {
	event.preventDefault(); //colocar essa função quando clicar em botão dentro de formulario
	// console.log('escutando');
	// adicionaTabela();   o javascript possui dois tipos de função nomeada  e anonimas

	var form = document.querySelector('#form-adiciona');
	//Extraindo informacoes do paciente do form
	var paciente = obterPacienteDoFormulario(form);

	console.log(paciente);

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
	//criar a tr e td do paciente
	var pacienteTr = document.createElement('tr'); //criar tabela no html

	var nomeTd = document.createElement('td'); //criando o td da tabela
	var pesoTd = document.createElement('td');
	var alturaTd = document.createElement('td');
	var gorduraTd = document.createElement('td');
	var imcTd = document.createElement('td');

	nomeTd.textContent = nome; //colocando os nomes dentro da td
	pesoTd.textContent = peso;
	alturaTd.textContent = altura;
	gorduraTd.textContent = gordura;
	imcTd.textContent = calculaImc(peso, altura);

	pacienteTr.appendChild(nomeTd); //adicionando filhos para a tabela o child chama a funcao na tr e passa para o td
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);
	pacienteTr.appendChild(imcTd);

	//adicionando o paciente na tabela
	var tabela = document.querySelector('#tabela-pacientes');

	tabela.appendChild(pacienteTr);
});

function calculaImc(peso, altura) {
	var imc = 0;

	imc = peso / (altura * altura);

	return imc.toFixed(2);
}
