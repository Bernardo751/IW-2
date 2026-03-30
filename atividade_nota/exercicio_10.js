let numero = parseInt(prompt("Digite um número:"));
let fatorial = 1;

if (numero <= 0) {
    alert("Fatorial não existe para números negativos ou zero.");
} else {
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    alert("O fatorial de " + numero + " é: " + fatorial);
}