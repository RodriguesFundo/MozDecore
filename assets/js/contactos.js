
  function validarFormulario(event) {

    // Obtenha os valores dos campos do formulário
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Realize as validações desejadas
    if (name === '') {
      alert('Por favor, preencha o campo Nome.');
      return;
    }

    if (email === '') {
      alert('Por favor, preencha o campo Email.');
      return;
    }

    if (message === '') {
      alert('Por favor, preencha o campo Mensagem.');
      return;
    }

    // Se a validação passar, você pode enviar o formulário

    alert('Formulário enviado com sucesso!');
    document.getElementById('name').value = ''; // Limpa o campo após o envio
    document.getElementById('email').value = ''; // Limpa o campo após o envio
    document.getElementById('message').value = ''; // Limpa o campo após o envio
  }

  // Adicione um manipulador de eventos para o evento de envio do formulário
  var form = document.querySelector('form');
  form.addEventListener('submit', validarFormulario);
