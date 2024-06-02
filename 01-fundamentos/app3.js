const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf-8');

const words = content.split(' ');

const reactWordCount = content.match(/react/gi).length;

console.log('Palabras: ', words.length );
console.log('Palabras React: ', reactWordCount );


// console.log(wordCount);

// let reactWord = /react/gi;

// let cantidad = content.match(reactWord);

// console.log('Palabras: ', wordCount.length );

// console.log('Palabras React:', cantidad.length);

// let expresionRegular = /react/gi;

// let coincidencias = content.match(expresionRegular);

// const cantidadCoincidencias = (coincidencias) ? coincidencias.length : 0;
// console.log("La palabra 'React' aparece " + cantidadCoincidencias + " veces en el Readme.");
