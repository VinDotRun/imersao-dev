var cartas = [
  {
    nome: "Bulbassauro",
    atributos: {
      ataque: 7,
      defesa: 5,
      magia: 6
    }
  },
  {
    nome: "Charizard",
    atributos: {
      ataque: 9,
      defesa: 7,
      magia: 3
    }
  },
  {
    nome: "Pikachu",
    atributos: {
      ataque: 9,
      defesa: 5,
      magia: 10
    }
  }
];

var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 3);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 3);
  while (numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(Math.random() * 3);
  }
  cartaJogador = cartas[numeroCartaJogador];

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  
  exibirOpcoes();
}

function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + "</input>";
  }

  opcoes.innerHTML = opcoesTexto;
}

function obterAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");
  
  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obterAtributoSelecionado();
  
  var elementoResultado = document.getElementById("resultado");
  
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  
  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = "Você venceu!"
  } else if (valorCartaMaquina > valorCartaJogador) {
    elementoResultado.innerHTML = "Você perdeu! A carta da máquina é maior."
  } else {
    elementoResultado.innerHTML = "Empate!"
  }
}