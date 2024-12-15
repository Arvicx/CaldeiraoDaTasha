function filtrarResultados() {
    const input = document.getElementById('barra-pesquisa').value.toLowerCase();
    const listItems = document.querySelectorAll('#listaResultados li');
  
    listItems.forEach(item => {
      const text = item.textContent.toLowerCase();
      if (text.includes(input)) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  }
  
  function executarPesquisa() {
    const query = document.getElementById('barra-pesquisa').value;
    alert(`Você buscou por: ${query}`);
  }