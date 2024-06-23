"use strict";
// const {emailTemplate} = require('./js-foundation/01-template.js');
// require('./js-foundation/02-destructuring.js');
// require('./js-foundation/03-callbacks');
// const {getUserById} = require('./js-foundation/03-callbacks.js');
// const {getUserByIdArrow} = require('./js-foundation/03-arrow.js');
// require('./js-foundation/05-factory.js');
Object.defineProperty(exports, "__esModule", { value: true });
const logger_plugin_1 = require("./plugins/logger.plugin");
// const getPokemonById = require('./js-foundation/06-promises')
const logger = (0, logger_plugin_1.buildLogger)('app.ts');
// logger.log('Hola mundo');
// logger.error('Hola mundo');
// getPokemonById(4)
//     .then ( (pokemon) => console.log({pokemon}))
//     .catch( ( err ) => console.log( err ))
//     .finally( () => { console.log( 'Finalmente' ) })
// ! Referencia a la función factory y su uso 
// const makePerson = buildMakePerson({ getUUID, getAge });
// const obj = { name: 'Jhon', birthdate: '2003-06-10'};
// const john = makePerson( obj );
// console.log(john);
