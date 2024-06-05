let usuarios = [];

document
  .getElementById("formularioCadastro")
  .addEventListener("submit", salvarCadastro);

function salvarCadastro(event) {
  event.preventDefault();

  var nome = document.getElementById("idnome").value;
  var email = document.getElementById("idemail").value;
  var telefone = document.getElementById("idtelefone").value;
  var senha = document.getElementById("idsenha").value;

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  // Procura o usuário no LocasStorage
  var usuarioExiste = usuarios.some((usuario) => usuario.email == email);

  if (usuarioExiste) {
    alert("Usuário já existe!");
  } else if (!nome || !email || !telefone || !senha) {
    alert("Preencha os dados corretamente.");
  } else {
    // Cria objeto Usuário
    const usuario = {
      nome: nome,
      email: email,
      telefone: telefone,
      senha: senha,
    };

    usuarios.push(usuario);
    // Salva objeto em LocalStorage
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    alert("Usuário cadastrado!");

    // Limpa o formulário
    document.getElementById("formularioCadastro").reset();
  }
}
