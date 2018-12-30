$(document).ready(function(){

	function exibeNota() {
		var response = $('#mostra').html('Id digitado: ' + id + "<br>Título: " + titulo);
	}

	function clickBotao(event) {
		event.preventDefault();
		var id = $("#id_nota").val();
		alert(id);

		jQuery.ajax({
		  url: 'http://devmedianotesapi.azurewebsites.net/api/notes/'+id,
		  type: 'GET',
		  dataType: 'json',
		  data: {id: 'value'},
		  complete: function(xhr, textStatus) {
		    	console.log('aqui');
		  },
		  success: function(data, textStatus, xhr) {
		    exibeNota
		    
		  },
		  error: function(xhr, textStatus, errorThrown) {
		    //called when there is an error
		  }
		});
		
	}

	//$('#btn_nota').on('click', clickBotao)
		
});