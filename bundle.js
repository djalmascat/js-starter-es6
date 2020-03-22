"use strict";

var usuario = {
  nome: 'Bruno',
  idade: 36,
  endereco: {
    cidade: 'Aracaju',
    estado: 'SE'
  }
};
/*
const { nome, idade, endereco: { cidade }} = usuario;
console.log(nome);
console.log(idade);
console.log(cidade);
*/

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade,
      estado = _ref.endereco.estado;
  console.log(nome, idade, estado);
}

;
mostraNome(usuario);
