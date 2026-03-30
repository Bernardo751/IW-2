// Gera número aleatório de 1 a 10
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let palpite;

while (palpite != numeroSecreto) {
    palpite = parseInt(prompt("Adivinhe um número de 1 a 10:"));

    if (palpite < numeroSecreto) {
        alert("Muito baixo! Tente um número maior.");
    } else if (palpite > numeroSecreto) {
        alert("Muito alto! Tente um número menor.");
    } else {
        alert("Parabéns! Você acertou ");
    }
}