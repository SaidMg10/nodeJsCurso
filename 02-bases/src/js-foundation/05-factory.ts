import { getUUID } from '../plugins/get-id.plugin';
import { getAge } from '../plugins/get-age.plugin';

// const {getUUID} = require('../public/get-id.plugin');
// const {getAge} = require('../public/get-age.plugin');
// const {getUUID, getAge} = require('../plugins');

interface BuildMakePersonOptions {
    getUUID: () => string;
    getAge: ( birthdate: string ) => number;
}

interface PersonOptions {
    name: string;
    birthdate: string;
}

export const buildMakePerson = ({ getUUID, getAge }: BuildMakePersonOptions) => {
    return ({ name, birthdate }: PersonOptions) => {
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
