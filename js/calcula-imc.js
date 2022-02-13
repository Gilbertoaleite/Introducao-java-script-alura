/** @format */

// function capturaNome(value) {
// var nome = document.querySelector('input');

// // }

// console.log(nome.textContent);

//console.log(document.querySelector('h1'));

// nome do titulo
var titulo = document.querySelector('.titulo');

// Alterar o conteudo da tage h1
// titulo.textContent = 'Tatiana Nutrição';
// titulo.classList.add('campo-invalido');
// titulo = document.querySelector('h1');
// console.log(titulo.classList);

//nomear sub_titulo
// var subTitulo = document.querySelector('#subTitulo');

// subTitulo.textContent = 'Meus pacientes';

var pacientes = document.querySelectorAll('.paciente');

for (var i = 0; i < pacientes.length; i++) {
	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector('.info-peso');
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector('.info-altura');
	var altura = tdAltura.textContent;

	//1//var imc = peso / (altura * altura); //calculo do imc 100 / 2.0 * 2.0 = 100 / 4 => 25
	var imc_input = paciente.querySelector('.info-imc'); // capturando o campo imc
	//2/imc_input.textContent = imc; //escrevedo o imc recebido no campo imc
	var modoEscuro = document.querySelector('.modoDark');

	var pesoEhValido = validaPeso(peso);
	var alturaEhValida = validaAltura(altura); //validaAltura(altura);


	if (!pesoEhValido) {
		pesoEhValido = false;
		imc_input.textContent = 'Peso Inválido!';
		paciente.classList.add('paciente-invalido');
	}

	if (!alturaEhValida) {
		alturaEhValida = false;
		imc_input.textContent = 'Altura inválida';
		paciente.classList.add('paciente-invalido');
	}

	if (alturaEhValida && pesoEhValido) {
		var imc = calculaImc(peso, altura);
		imc_input.textContent = imc;
	}

	function validaPeso(peso) {
		if (peso >= 0 && peso < 1000) {
			return true;
		} else {
			return false;
		}
	}

	function validaAltura(altura) {
		if (altura >= 0 && altura <= 3.0) {
			return true;
		} else {
			return false;
		}
	}
	//paciente.style.color = 'red'; //so mudar a cor do texto
	// paciente.style.backgroundColor = 'red'; //mudar o fundo da celula
	function calculaImc(peso, altura) {
		var imc = 0;
		imc = peso / (altura * altura);

		return imc.toFixed(2);
	}
}

function mudaCor() {
	//modoEscuro.style.backgroundColor = '#000000'; // muda cor
	modoEscuro.classList.add('modoEscuro');
}

var botao = document.querySelector('#btn-escuro');
botao.addEventListener('click', function () {
	//if ((onkeydown = botao)) {
	mudaCor();
	//console.log('clicou');
});

//titulo.addEventListener('click', mostraMensagem); //funçao de escutar evento
// titulo.addEventListener('click', function () {
// 	//função anonima
// 	console.log('ola sou função anonima');
// });

// function adicionaTabela() {
// 	var adicionaTabela = document.querySelector('#adiciona-tabela');
// 	adicionaTabela.textContent = (
// 		<tr class='paciente'>
// 			<td class='info-nome'></td>
// 			<td class='info-peso'></td>
// 			<td class='info-altura'></td>
// 			<td class='info-gordura'></td>
// 			<td class='info-imc'></td>
// 		</tr>
// 	);
// }

// var main = document.querySelector('body'); exemplo de colocar uma class usando o js
// main.classList.add('modoEscuro');

// funçao responsavel por criar elemento no js é o createElement()
