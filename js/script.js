$(document).ready(function(){

	/* faz a requisição p/ API p/ a exibição das notas */
	function exibeNota(data) {
		if($.isArray(data)) {
			// limpa a resposta a cada requisição
			$('#resposta').empty();

			// caso seja um array, percorre-o para exibir cada nota
			$.each(data, function(index, el) {
				$('#resposta').append('userId: ' + el.userId + "<br>Id: " + el.id + "<br>Title: " + el.title + "<br>Body: " + el.body);
			});
		} else {
			// caso um id específico seja pesquisado, é mostrado apenas este id
			var response = $('#resposta').html('userId: ' + data.userId + "<br>Id: " + data.id + "<br>Title: " + data.title + "<br>Body: " + data.body);	
		}
		
	}

	/* se o id a ser buscado não existir na API, cairá dentro desta função */
	function exibeErro() {
		$('#resposta').html('Ops! Esta nota não existe.');
		$('#loading').empty();
	}

	/* exibe o loading antes de completar a requisição */
	function exibeLoading() {
		$('#loading').html('<img style="width:15px; margin-left:10px;" src="http://devmedia.com.br/cursos/img/loading.gif">');
	}

	/* executa q requisição p/ a API */
	function clickBotao(event) {
		event.preventDefault();
		var id = $("#id_nota").val();

		jQuery.ajax({
		  url: 'http://jsonplaceholder.typicode.com/posts/'+id,
		  type: 'GET',
		  dataType: 'json',	
		  success: function(data) {
		    exibeNota(data);	
		    $('#loading').empty();	    
		  },
		  error: function(xhr, textStatus, errorThrown) {
		    // caso seja passado uma valor que não está presente na API, a funcção de erro é chamada
		    exibeErro();
		  },
		  beforeSend: function() {
		  	// antes de enviar a requisição, chama a função que mostra o loading
		  	exibeLoading();
		  }
		});		
	}

	/* ao clicar no botão ENVIAR, chama a função clickBotao */
	$('#btn_nota').on('click', clickBotao)
		
});