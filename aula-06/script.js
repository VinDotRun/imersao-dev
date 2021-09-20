var rafa = { nome: "Rafa", vitorias: 2, empates: 1, derrotas: 1, pontos: 0 };
var paulo = { nome: "Paulo", vitorias: 1, empates: 1, derrotas: 2, pontos: 0 };

function calcularPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

rafa.pontos = calcularPontos(rafa);
paulo.pontos = calcularPontos(paulo);

var jogadores = [rafa, paulo];

function exibirJogadores() {
  var elemento = "";

  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr>";
    elemento += "<td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "</tr>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibirJogadores();

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  
  jogador.vitorias++;
  jogador.pontos = calcularPontos(jogador);
  
  exibirJogadores();
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  
  jogador.empates++;
  jogador.pontos = calcularPontos(jogador);
  
  exibirJogadores();
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  
  jogador.derrotas++;
  
  exibirJogadores();
}