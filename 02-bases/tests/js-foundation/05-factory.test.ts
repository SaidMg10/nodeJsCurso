import { buildMakePerson } from '../../src/js-foundation/05-factory';



describe('js-foundation/05-factory.ts', () => {

    const getUUID = () => '123';
    const getAge = () => 20;

    test('buildMakePerson should return a function', () => {
        
        const makePerson = buildMakePerson({ getAge, getUUID });
        expect(typeof makePerson).toBe('function');

    });

    test('makePerson should return a Person', () => {

        const makePerson = buildMakePerson({getUUID, getAge});
        const johnDoe = makePerson({ name: 'Pavlob Doe', birthdate: '1985-10-21'});

        expect(johnDoe).toEqual({
            id: '123',
            name: 'Pavlob Doe',
            birthdate: '1985-10-21',
            age: 20
        });
    })
})