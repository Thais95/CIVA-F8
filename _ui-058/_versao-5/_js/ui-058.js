// TRATAMENTO DOS CAMPOS DO FORMULÁRIO

window.onload = function () {
  document.getElementById("alterar-dados").onsubmit = tratar_campos;
};

tratar_campos = function () {
  let erro = false;
  var msg = "";

  let campos = new Array(
    "nome",
    "cod-civa",
    "data-nasc",
    "identidade",
    "pais-origem",
    "cargo",
    "email",
    "contato",
    "contato-pre"
  );

  const nomes = {
    nome: "Nome",
    "cod-civa": "Código CIVA",
    identidade: "Identidade",
    "data-nasc": "Data de nascimento",
    "pais-origem": "País de origem",
    cargo: "Cargo",
    email: "Email",
    contato: "Contato",
    "contato-pre": "DDD"
  };

  for (i = 0; i < campos.length; i++) {
    if (document.getElementById(campos[i]).value == "") {
      msg = "" + msg + nomes[campos[i]] + ", ";
      erro = true;
    }
  }
  if (erro) {
    msg = msg.substr(0, msg.length - 2);
    alert("o(s) campo(s) " + msg + " é (são) obrigatório(s)");
  } else {
    alert("Salvo Com Sucesso!");
  }

  return !erro;
};

//Seleção do menu

list = document.querySelectorAll(".item-menu");

for (let i = 0; i < list.length; i++) {
  list[i].onclick = function () {
    let j = 0;
    while (j < list.length) {
      list[j++].className = "item-menu";
    }
    list[i].className = "item-menu active-item-menu";
  };
}

// BOTAO TOGGLE ATIVAR DESATIVAR USUARIO
const btnToggle = document.querySelector(".toggle-btn");
const toggleName = document.querySelector(".toggle-name");

btnToggle.onclick = (event) => {
  btnToggle.classList.toggle("active-toggle");

  if (btnToggle.classList == "toggle-btn") {
    toggleName.textContent = "Ativado";
  } else {
    toggleName.textContent = "Desativado";
  }
};

// CHAMAR MODAL
const modalcontainer = document.querySelector("#container-modal");

const modalbtnclose = document.querySelector("#modalclose2");

const modalbtnopen = document.querySelector("#modalopen2");

modalbtnopen.onclick = (event) => {
  modalcontainer.style.display = "flex";
};

modalbtnclose.onclick = (event) => {
  modalcontainer.style.display = "none";
};
