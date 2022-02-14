/** @format */

// var pacientes = document.querySelectorAll(".paciente");

// pacientes.forEach(function (paciente) {
//    paciente.addEventListener("dblclick", function () {  //dblclick signigica double click
//       this.remove();
//    });
// });

var tabela = document.querySelector('#tabela-pacientes');

//click para remover da tabela
tabela.addEventListener('dblclick', function (event) {
   event.target.parentNode.classList.add('fadeOut');
   
   setTimeout(function () {
      if (event.target.tagName == 'TD') {
         event.target.parentNode.remove();
      }}, 500)
});
