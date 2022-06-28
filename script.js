function exercicioUm(){
  const numeroUm = parseInt(prompt("Digite o primeiro número"))
  const numeroDois = parseInt(prompt("Digite o segundo número"))
  alert(`O resto da divisão de ${numeroUm} por ${numeroDois} é: ${(numeroUm % numeroDois)}`)
  alert(`O número ${numeroUm} elevado a ${numeroDois} é: ${(numeroUm ** numeroDois)}`)
}

function exercicioDois(){
  const numeroUm = parseInt(prompt("Digite o primeiro número"))
  const numeroDois = parseInt(prompt("Digite o segundo número"))
  alert(`a subtração é: ${(numeroUm - numeroDois)}, a soma é: ${(numeroUm + numeroDois)}, a multiplicação é: ${(numeroUm * numeroDois)}, a divisão é: ${(numeroUm / numeroDois)}`)
}