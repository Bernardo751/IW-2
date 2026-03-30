let num = Number(prompt("Digite um número: "));
let primo = true;

for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        primo = false;
        break;
    }
}

if (num <= 1) {
    console.log("Não é primo");
} else if (primo) {
    console.log("É número primo");
} else {
    console.log("Não é primo");
}
