document.addEventListener("DOMContentLoaded", function() {
    fetch('../HTML/components/header.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById('header-placeholder').innerHTML = html;
      })
      .catch(error => {
        console.error('Erro ao carregar o cabeçalho:', error);
      });
  });

  document.addEventListener("DOMContentLoaded", function() {
    fetch('../HTML/components/footer.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById('footer').innerHTML = html;
      })
      .catch(error => {
        console.error('Erro ao carregar o footer:', error);
      });
  });
  