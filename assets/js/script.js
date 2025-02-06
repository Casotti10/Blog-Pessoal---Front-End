// Expressão regular para validar e-mails.
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// Adiciona um evento de escuta para quando o formulário for enviado.
formulario.addEventListener('submit', function(event) {
  
    // Previne o comportamento padrão do formulário (recarregar a página).
    event.preventDefault();
  
    // Captura o campo de nome e a área onde a mensagem de erro será exibida.
    const campoNome = document.querySelector('#name');
    const txtNome = document.querySelector('#txtNome');

    // Verifica se o nome tem pelo menos 3 caracteres.
    if (campoNome.value.length < 3) {
        txtNome.innerHTML = 'O Nome deve ter no mínimo 3 caracteres.';
        campoNome.focus(); // Coloca o foco no campo com erro.
        return; // Interrompe a execução para corrigir o erro antes de prosseguir.
    } else {
        txtNome.innerHTML = ''; // Limpa a mensagem de erro se estiver correto.
    }

    // Captura o campo de e-mail e a área onde a mensagem de erro será exibida.
    const campoEmail = document.querySelector('#email');
    const txtEmail = document.querySelector('#txtEmail');

    // Verifica se o e-mail digitado corresponde à expressão regular.
    if (!campoEmail.value.match(emailRegex)) {
        txtEmail.innerHTML = 'Digite um E-mail válido.';
        campoEmail.focus(); // Coloca o foco no campo com erro.
        return; // Interrompe a execução até que o e-mail esteja correto.
    } else {
        txtEmail.innerHTML = ''; // Limpa a mensagem de erro.
    }

    // Captura o campo de assunto e a área onde a mensagem de erro será exibida.
    const campoSubject = document.querySelector('#subject');
    const txtSubject = document.querySelector('#txtSubject');

    // Verifica se o assunto tem pelo menos 5 caracteres.
    if (campoSubject.value.length < 5) {
        txtSubject.innerHTML = 'O Assunto deve ter no mínimo 5 caracteres.';
        campoSubject.focus(); // Coloca o foco no campo com erro.
        return; // Interrompe a execução para corrigir o erro antes de prosseguir.
    } else {
        txtSubject.innerHTML = ''; // Limpa a mensagem de erro.
    }

    // Captura o campo de mensagem (embora não seja validado).
    const campoMessage = document.querySelector('#message');

    // Exibe um alerta informando que o formulário foi enviado com sucesso.
    window.alert("Formulário Enviado com Sucesso!");

    // Limpa os campos do formulário após o envio bem-sucedido.
    campoNome.value = '';
    campoEmail.value = '';
    campoSubject.value = '';
    campoMessage.value = '';

});