alert("Boas Vindas");

let nome = prompt("Qual é o seu nome?");
alert("Olá, " +nome+"!");


let idade = prompt("Quantos anos você tem?");
if (idade <18){
    alert("Você é menos de idade");
} else{
    alert("Você é maior de idade");
}

let resposta = confirm('Você deseja contnuar?');
if (resposta){
    alert("Seja Bem Vindo");
} else {
    alert("Tchau!");
}

let n1 = prompt("Declare o primeiro número");
let n2 = prompt("Declare o segundo número");
let soma = parseFloat(n1) + parseFloat(n2);
alert ("A soma é: "+soma+" !");

let n3 = prompt("Escreva mais número para duplicá-lo")
let dobro = n3*2;
alert ("o dobro do numero é: " +dobro+ "!");

let nome2 = prompt("Digite seu nome denovo:");
let idade2 = prompt("Olá " +nome2+ " Digite sua idade denovo")
alert ("Seja bem vindo "+nome2+ " de " +idade2+ " anos")