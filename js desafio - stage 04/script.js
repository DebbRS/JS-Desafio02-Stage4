const firstNumber = Number(prompt("Informe o primeiro número:"))
const secondNumber = Number(prompt("Informe o segundo número:"))

let sum = firstNumber + secondNumber
let sub = firstNumber - secondNumber
let mult = firstNumber * secondNumber
let div = (firstNumber / secondNumber).toFixed(2)
let restDiv = firstNumber % secondNumber

alert(`A soma dos números é ${sum}.`)
alert(`A substração dos números é ${sub}.`)
alert(`A multiplicação dos números é ${mult}.`)
alert(`A divisão dos números é ${div}.`)
alert(`O resto da divisão desses números é ${restDiv}.`)

if(sum % 2 === 0) {
  alert(`A soma dois dois números é par: ${sum}`)
} else {
  alert(`A soma dos dois números é ímpar: ${sum}`)
}

if(firstNumber === secondNumber) {
  alert("Os números inseridos são iguais.")
} else {
  alert("Os números inseridos são diferentes.")
}

