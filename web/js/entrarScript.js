document.getElementById("formularioLogin").addEventListener("submit", logar);

function logar(event) {
  event.preventDefault();

  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;

  // Procura o usuário no LocasStorage
  var validarUsuario = usuarios.find(
    (usuario) => usuario.email === email && usuario.senha === senha
  );

  if (validarUsuario) {
    window.location.href = "PaginaPrincipal.html";
  } else {
    alert("email ou senha invalidos");
    return;
  }
}
