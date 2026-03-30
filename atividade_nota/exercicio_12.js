let n1 = parseFloat(prompt("Digite a sua primeira nota"));
let n2 = parseFloat(prompt("Digite a sua segunda nota"));
let n3 = parseFloat(prompt("Digite a sua terceira nota"));
let media = (n1+n2+n3)/3;
let situacao;
if (media >= 7) {
    situacao = "aprovado";
    alert("Sua situação é: " + situacao);
} else {
    situacao = "reprovado";
    alert("Sua situação é: " + situacao);
}