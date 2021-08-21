const ListaDePecas = ["Ar condicionado", "Motor", "Amortecedor"]

console.log(ListaDePecas)

if (ListaDePecas.length < 10) {
    console.log("é possível cadastrar mais peças")
} else {
    console.log("Não há mais espaço na lista")
}

var peso = 50;

if (peso >= 100) {
    console.log("Peso da peça está adquado");
} else {
    console.log("Peso insuficiante")
}

let nomePeca = "sfff";

if (nomePeca.length > 3) {
    console.log("Nome adequado!!")
} else if (nomePeca.length == 0) {
    console.log("O nome não pode ser vazio")
} else {
    console.log("O nome deve possuir mais de 3 caracteries")
}

switch (nomePeca.length) {
    case 0:
        console.log("O nome não pode ser vazio")
        break;

    case 1:
    case 2:
    case 3:
        console.log("O nome deve possuir mais de 3 caracteres")
        break;

    default:
        console.log("Nome adequado!!")
        break;
}

// = -> Atribuição de valor, recebe
// == -> Verifica se o valor é igual
// === -> Verifica se o valor, e o tipo de dado, são iguais

