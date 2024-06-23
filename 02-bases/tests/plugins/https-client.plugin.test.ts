import { httpClientPlugin } from '../../src/plugins/https-client.plugin';


describe('plugins/http-client.plugin.ts', () => {
    const url = 'as'
    const body = {}

    test('httpClientPlugin.get() should return a string', async () => {

        const data = await httpClientPlugin.get('https://jsonplaceholder.typicode.com/todos/1');


        expect( data ).toEqual({
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: expect.any(Boolean)
        });

        
    });
    
    test('httpClientPlugin should have POST, PUT and Delete methods return a function', () => {

        const httpClientPost = httpClientPlugin.post;
        expect(typeof httpClientPost).toBe('function');

        const httpClientPut = httpClientPlugin.put;
        expect(typeof httpClientPut).toBe('function');

        const httpClientDelete = httpClientPlugin.delete;
        expect(typeof httpClientDelete).toBe('function');

    });
    


});