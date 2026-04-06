// a) maior entre 2 números
let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));

function maiornumero(a, b) {
    return a > b ? a : b;
}

alert("O maior numero é: " + maiornumero(num1, num2));


// b) verificar se é par
let numero = parseInt(prompt("Digite um número para saber se é par:"));

function par(num) {
    return num % 2 === 0;
}

alert(par(numero) ? "par" : "impar");


// c) fatorial
let n = parseInt(prompt("Digite um número para calcular o fatorial:"));

function fatorial(n) {
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

alert("fatorial: " + fatorial(n));


// d) média de números

let quantidade = parseInt(prompt("quantos números você vai digitar?"));

let soma = 0;

for (let i = 1; i <= quantidade; i++) {
    let numero = parseFloat(prompt("Digite o número " + i + ":"));
    soma += numero;
}

function media(soma, quantidade) {
    return soma / quantidade;
}

alert("média: " + media(soma, quantidade));


// e) Celsius para Fahrenheit
let celsius = parseFloat(prompt("Digite a temperatura em Celsius:"));

function celsiusParaFahrenheit(c) {
    return (c * 9/5) + 32;
}

alert("temperatura em fahrenheit: " + celsiusParaFahrenheit(celsius));