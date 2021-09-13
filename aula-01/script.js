var nome = "Vinícius"
var notaDoPrimeiroBimestre = 9
var notaDoSegundoBimestre = 7
var notaDoTerceiroBimestre = 4
var notaDoQuartoBimestre = 2

var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4

var notaFixada = notaFinal.toFixed(1)

console.log("Bem-vindo " + nome)

if (notaFixada >= 5) {
  console.log("Você foi aprovado neste ano, com média " + notaFixada + "!")
} else {
  console.log("Você não foi aprovado dessa vez. Sua nota final foi: " + notaFixada + ". Boa sorte na próxima vez.")
}