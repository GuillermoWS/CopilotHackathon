// BEGIN: ed8c6549bwf9
describe('Node Server', () => {
    it('should return "key not passed" if key is not passed', (done) => {
        http
        .get('http://localhost:3000/get' , (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                assert.equal(data, 'key not passed');
                done();
            });
        });
    });

    it('should return "Hello, world!" if key is equal to "world"', (done) => {
        http
        .get('http://localhost:3000/get?key=world' , (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                assert.equal(data, 'Hello, world!');
                done();
            });
        });
    });

    //add test to check validatephoneNumber

    //write test to validate validateSpanishDNI
   

    //write test for returnColorCode red should return code #FF0000


   //write test for daysBetweenDates



});
// END: ed8c6549bwf9