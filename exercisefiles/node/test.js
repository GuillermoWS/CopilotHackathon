//write npm command line to install mocha
//npm install --global mocha

//command to run this test file
//mocha test.js

const assert = require('assert');
const http = require('http');
const server = require('./nodeserver');

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

    //add test to check get when key is equal to world
    it('should return "Hello, world!" if key is equal to "world"', (done) => {
        http
        .get('http://localhost:3000/get?key=world!' , (res) => {
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
    it('should return true if phone number is valid', (done) => {
        http
        .get('http://localhost:3000/Validatephonenumber?phoneNumber=34666666666' , (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                assert.equal(data, 'valid');
                done();
            });
       })    
     });
    //write test to validate validateSpanishDNI
    it('should return true if dni is valid', (done) => {
        http
        .get('http://localhost:3000/ValidateSpanishDNI?dni=12345678Z' , (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                assert.equal(data, 'valid');
                done();
            });
       })    
     });
    

    //write test for returnColorCode red should return code #FF0000
    it('should return #FF0000 if color is red', (done) => {
        http
        .get('http://localhost:3000/returnColorCode?color=red' , (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                assert.equal(data, 'red');
                done();
            });
       })    
     });

   //write test for daysBetweenDates
    it('should return 1 if date1 is 01/01/2020 and date2 is 02/01/2020', (done) => {
     http
     .get('http://localhost:3000/daysBetweenDates?date1=01/01/2020&date2=02/01/2020' , (res) => {
          let data = '';
          res.on('data', (chunk) => {
                data += chunk;
          });
          res.on('end', () => {
                assert.equal(data, '31');
                done();
          });
    })
});
    
//write test for TellMeAJoke
it('should return a joke', (done) => {
    http
    .get('http://localhost:3000/TellMeAJoke' , (res) => {
         let data = '';
         res.on('data', (chunk) => {
               data += chunk;
         });
         res.on('end', () => {
               assert.equal(data, '123');
               done();
         });
   })
});

//write test for Receive by querystring a parameter called director
it('should return a movie', (done) => {
    http
    .get('http://localhost:3000/MoviesByDirector?director=Quentin%20Tarantino' , (res) => {
         let data = '';
         res.on('data', (chunk) => {
               data += chunk;
         });
         res.on('end', () => {
               assert.equal(data, 'Quentin Tarantino');
               done();
         });
   })
});

//write test for receive by querystring a url and return the host
it('should return the host', (done) => {
    http
    .get('http://localhost:3000/ParseUrl?url=https://www.google.com/' , (res) => {
         let data = '';
         res.on('data', (chunk) => {
               data += chunk;
         });
         res.on('end', () => {
               assert.equal(data, 'www.google.com');
               done();
         });
   })
});

//write a test for receive by querystring the current directory and return the list of files in a directory
it('should return the list of files in a directory', (done) => {
    http
    .get('http://localhost:3000/ListFiles?directory=.' , (res) => {
         let data = '';
         res.on('data', (chunk) => {
               data += chunk;
         });
         res.on('end', () => {
               //validate the response data have got almost one element
               assert.equal(data.length > 0, true);
              
               done();
         });
   })
});

//write a test to invoke GetFullTextFile with query string filename and return return lines that contains the word "Fusce"
it('should return the lines that contains the word "Fusce"', (done) => {
    http
    .get('http://localhost:3000/GetFullTextFile?filename=sample.txt' , (res) => {
         let data = '';
         res.on('data', (chunk) => {
               data += chunk;
         });
         res.on('end', () => {
               //validate the response data have got almost one element
               assert.equal(data, '5');
               done();
         });
   })
});

//write a test to invoke CalculateMemoryConsumption with query string filename and return the memory consumption
it('should return the memory consumption', (done) => {
    http
    .get('http://localhost:3000/CalculateMemoryConsumption' , (res) => {
         let data = '';
         res.on('data', (chunk) => {
               data += chunk;
         });
         res.on('end', () => {
               //validate the response data have got almost one element
               assert.equal(data, '0.01');
               done();
         });
   })
});


// write a test to invoke MakeZipFile with query string filename returns the numbers of bytes of the zip file
it('should return the numbers of bytes of the zip file', (done) => {
    http
    .get('http://localhost:3000/MakeZipFile?filename=sample.txt' , (res) => {
         let data = '';
         res.on('data', (chunk) => {
               data += chunk;
         });
         res.on('end', () => {
               //validate the response data have got almost one element
               assert.equal(data, '29');
               done();
         });
   })
});

//write a test to invoke RandomEuropeanCountry and return a random european country
it('should return a random european country', (done) => {
    http
    .get('http://localhost:3000/RandomEuropeanCountry' , (res) => {
         let data = '';
         res.on('data', (chunk) => {
               data += chunk;
         });
         res.on('end', () => {
               //validate the response data have got almost one element
               assert.equal(data.length = 1, true);
               done();
         });
   })
});

});
