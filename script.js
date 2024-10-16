
let firstNumber = prompt("Digite o primeiro número")
let secondNumber = prompt("Digite o segundo número")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const mult = firstNumber * secondNumber
const div = firstNumber / secondNumber
const rest = firstNumber % secondNumber

if (isNaN(firstNumber) || isNaN(secondNumber)){
    alert("Digite apenas números")
} else {
    alert(`A soma: ${sum}`)
    alert(`A subtração: ${sub}`)
    alert(`A multiplicação: ${mult}`)
    alert(`A divisão: ${div}`)
    alert(`O resto da divisão: ${rest}`)
}

if(sum % 2 == 0){
    alert(`A soma dos números é par: ${sum}`)
} 

if(firstNumber == secondNumber) {
    alert(`Os numeros inseridos são iguais`)
}    