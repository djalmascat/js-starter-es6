const usuario = {
    nome: 'Bruno',
    idade: 36,
    endereco: {
        cidade: 'Aracaju',
        estado: 'SE',
    },
};
/*
const { nome, idade, endereco: { cidade }} = usuario;
console.log(nome);
console.log(idade);
console.log(cidade);
*/
function mostraNome({ nome, idade, endereco: { estado } }) {
    console.log(nome, idade, estado);
};
mostraNome(usuario);