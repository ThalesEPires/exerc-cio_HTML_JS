const form = document.getElementById("formulario");

function numValido(campo1, campo2) {
    return campo2 > campo1;
}

form.addEventListener('submit', function(e) {
    let formValido = false;
    e.preventDefault();

    const campo1 = Number(document.getElementById("campo1").value);
    const campo2 = Number(document.getElementById("campo2").value);
    const mensagemSucesso = 'O envio foi um sucesso';
    const mensagemErro = 'Os valores que você digitou são inválidos';

    formValido = numValido(campo1, campo2)
    if (formValido) {
        alert(mensagemSucesso);

    } else {
        alert(mensagemErro);
    }
});

