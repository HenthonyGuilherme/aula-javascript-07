// 1º)
var cidades = ['Recife', 'Jaboatão', 'Olinda', 'Caruaru', 'Petrolina', 'Paulista', 	'Camaragibe']
var reverso = cidades.reverse();
console.log(reverso);
reverso.splice(1, 0, 'Brejão', 'Brejinho');
console.log(reverso);

// 2º)
 var numeros = [1,4,8,6,9,2,6,7,3,0,5]
 var indexDo9 = numeros.indexOf(9);
console.log('O elemento 9 tá no index: ' + indexDo9);