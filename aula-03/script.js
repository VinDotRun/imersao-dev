function Chutar() {
  var numeroSecreto = parseInt(Math.random() * 11);
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);

  console.log(chute);

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou!";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Você deve digitar um número entre 0 e 10";
  } else {
    elementoResultado.innerHTML =
      "Você errou! O número secreto era " + numeroSecreto;
  }
}