var botaoAdicionar = document.querySelector('#buscar-pacientes');

botaoAdicionar.addEventListener('click', function () {
   console.log("Buscando Pacientes...");
   var xhr = new XMLHttpRequest();  //faz aquisição http
   xhr.open('GET', 'http://api-pacientes.herokuapp.com/pacientes');

   xhr.addEventListener("load", function () {
      console.log(xhr.responseText);
   });

   xhr.send();
});