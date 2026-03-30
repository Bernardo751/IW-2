let user = prompt("Digite o seu nome de usuário: ");
let senha = Number(prompt("Digite a sua senha (apenas números): "));
let userC = "vanin";
let senhaC = 12345;

while (true) {
    if ((user != userC) && (senha != senhaC) ){
        alert("Tente novamente!");
    } else {
        alert ("Seja muito bem-vindo senhor Vanin!");
        break
    }
}