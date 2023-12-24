function limparForm() {
  // Limpa os valores dos campos
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('nota').value = '';
    document.getElementById('comentario').value = '';
    document.getElementById('receberNoticias').checked = false;
    document.getElementById('concordar').checked = false;
  }

  const form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
    /* Impede o envio em branco*/
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const nota = document.getElementById('nota').value;
    // Obtém os valores dos campos
    const comentario = document.getElementById('comentario').value;
    // Mensagem com os valores do formulário
    const message = `Obrigado, ${nome}, por sua avaliação "${nota}" e por deixar seu comentário: ${comentario}. Agredecemos seu feedback!`;

    // Exibe mensagem
    alert(message);
    // Limpa os valores do campo
    form.reset();
  });
  