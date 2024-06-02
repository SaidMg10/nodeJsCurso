
// const {getUUID} = require('../public/get-id.plugin');
// const {getAge} = require('../public/get-age.plugin');
// const {getUUID, getAge} = require('../plugins');

const buildMakePerson = ({ getUUID, getAge }) => {
    return ({ name, birthdate }) => {
        return {
            id: getUUID(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate),
        }
    }
}

// const obj = { name: 'Jhon', birthdate: '2003-06-10'};

// const jhon = buildPerson(obj);

// console.log(jhon)

module.exports = {
    buildMakePerson,
}