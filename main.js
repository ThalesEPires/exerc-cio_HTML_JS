const form = document.getElementById("formulario");

function numValido(numeroMaior) {
    const numeroMaior = campo2 > campo1;
}

form.addEventListener('submit', function(e) {
    let formValido = false;
    e.preventDefault();

    const campo1 = document.getElementById("campo1").value;
    const campo2 = document.getElementById("campo2").value;
    const mensagemSucesso = document.getElementsByClassName("success-message");
    const mensagemErro = document.getElementsByClassName("error-message");

    formValido = numValido(numeroMaior.value)
    if (campo2 > campo1) {
        alert(mensagemSucesso);

    } else {
        alert(mensagemErro);
    }
});

