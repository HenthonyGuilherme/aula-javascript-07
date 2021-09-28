// 1º)
var palavra_1 = 'Aprendendo ';
var palavra = 'strings em JavaScript';
var juntar = palavra_1.concat(palavra)
console.log(juntar);

// 2º)
var palavra1 = 'palavra1';
var palavra2 = 'palavra2';
var palavra3 = 'palavra3';
var frase1 = 'Esta é a frase com a ';
var frase2 = 'Esta é a frase com a ';
var frase3 = 'Esta é a frase com a ';
console.log(frase1 + palavra1);
console.log(`${frase2} ${palavra2}`);
console.log(frase3.concat(palavra3));

// 3º) 

var vetor = ['a', 'b', 'a', 'a', 'c', 'b'];
var crescente = vetor.sort();
console.log(crescente);
var decrescente = crescente.reverse();
console.log(decrescente);