window.addEventListener('DOMContentLoaded', function() {
    var rows = document.getElementsByClassName('hidden');
    var currentIndex = 0;
  
    function showNextRow() {
      if (currentIndex < rows.length) {
        rows[currentIndex].style.opacity = '1';
        currentIndex++;
        setTimeout(showNextRow, 500); // Ajuste o tempo aqui (em milissegundos)
      }
    }
  
    showNextRow();
  });
  