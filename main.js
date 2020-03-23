//REST
//Ex 1
const usuario = {
    nome: "Bruno",
    idade: 36,
    empresa: "Cencosud"
};

const {
    nome,
    ...resto
} = usuario

console.log(nome);
console.log(resto);

//Ex 2
const arr = [1, 2, 3, 4];

const [a, b, ...c] = arr
console.log(a);
console.log(b);
console.log(c);

//Ex 3
function soma(a, b, ...params) {
    //return params.reduce((total, next) => total + next);
    return params;;
}
console.log(soma(1, 3, 4, 4, 5, 6, 7));

//SPREAD

//Ex 1
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

//Ex 2

const usuario1 = {
    nome: 'Bruno',
    idade: 36,
    empresa: 'Cencosud',
};

const usuario2 = {
    ...usuario1,
    nome: 'Allan'
};
console.log(usuario2);