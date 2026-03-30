let num = Number(prompt("Digite um valor: "));
let soma = 0;
while (num > 0){
    num  = Number(prompt("Digite outro valor, este será somado até que digite um valor menor que 0"));
    soma = soma + num;
    total = soma + 1;
    if (num < 0 ){
        alert("A soma total é: " + soma);
        break
    }
}