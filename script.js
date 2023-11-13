function consultarCidades() {
    var estadoInput = document.getElementById('estado');
    var estado = estadoInput.value.trim().toUpperCase();
  
    if (estado === '') {
      showError('Por favor, digite a UF do estado.');
      return;
    }
  
    hideError();
  
    var url = `https://brasilapi.com.br/api/ibge/municipios/v1/${estado}?providers=dados-abertos-br,gov,wikipedia`;
  
    fetch(url)
      .then(function(response) {
        if (!response.ok) {
          throw Error('Erro na requisição. Código: ' + response.status);
        }
        return response.json();
      })
      .then(function(data) {
        var cidadesUl = document.getElementById('cidades');
        cidadesUl.innerHTML = '';
  
        data.forEach(function(cidade) {
          var li = document.createElement('li');
          li.textContent = cidade.nome;
          cidadesUl.appendChild(li);
        });
      })
      .catch(function(error) {
        showError(error.message);
      });
  }
  
  function showError(message) {
    var errorMsg = document.getElementById('error-msg');
    errorMsg.textContent = message;
    errorMsg.style.display = 'block';
  }
  
  function hideError() {
    var errorMsg = document.getElementById('error-msg');
    errorMsg.style.display = 'none';
  }
  