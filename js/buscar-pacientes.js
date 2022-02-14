var botaoAdicionar = document.querySelector('#buscar-pacientes');

botaoAdicionar.addEventListener('click', function () {
   console.log("Buscando Pacientes...");
   var xhr = new XMLHttpRequest();  //faz aquisição http
   xhr.open('GET', 'http://api-pacientes.herokuapp.com/pacientes');

   xhr.addEventListener("load", function () {
      if ((xhr.status == 200)) {
      var response = xhr.responseText;
      var pacientes = JSON.parse(response); //parseado os dando
      
      pacientes.forEach(function (paciente) {
         adicionaPacienteNaTabela(paciente);
      });
         console.log(this.responseText);
      } else {
         console.log(xhr.status);
         console.log(xhr.responseText);
         var erroAjax = document.querySelector('#erro-ajax');
         erroAjax.classList.remove("invisivel");
      
   }
			
      });
      xhr.send();
});



