// write a nodejs server that will expose a method call "get" that will return the value of the key passed in the query string
// example: http://localhost:3000/get?key=hello
// if the key is not passed, return "key not passed"
// if the key is passed, return "hello" + key
// if the url has other methods, return "method not supported"
// when server is listening, log "server is listening on port 3000"

const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
 
    
    if (req.url.startsWith('/Validatephonenumber')) {
        //get phoneNumber var from querystring
        var queryData = url.parse(req.url, true).query;
        var phoneNumber = queryData.phoneNumber;
        
        //validate phoneNumber with Spanish format
        const validatePhoneNumber = (phoneNumber) => {
            const regEx = /^(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}$/;
            return regEx.test(phoneNumber);
        };
        //if phoneNumber is valid return "valid"
        if (validatePhoneNumber(phoneNumber)) {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('valid');
        } else {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('invalid');
        }

    }
    else
     //Calculate days between two dates
     //receive by query string 2 parameters date1 and date 2, and calculate the days between those two dates.
        if (req.url.startsWith('/daysBetweenDates')) {
            //get date1 and date2 var from querystring
            var queryData = url.parse(req.url, true).query;
            var date1 = queryData.date1;
            var date2 = queryData.date2;
            //calculate days between dates
            const daysBetweenDates = (date1, date2) => {
                const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
                const firstDate = new Date(date1);
                const secondDate = new Date(date2);
                const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
                return diffDays;
            };
            //return days between dates
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(daysBetweenDates(date1, date2).toString());
        }
        else
        //Receive by querystring a parameter called dni
        if (req.url.startsWith('/ValidateSpanishDNI')) {
            //get dni var from querystring
            var queryData = url.parse(req.url, true).query;
            var dni = queryData.dni;
            
            // calculate DNI letter
            var dniLetter = dni.charAt(dni.length - 1);
            var dniNumber = dni.substring(0, dni.length - 1);
            var dniLetterCalc = "TRWAGMYFPDXBNJZSQVHLCKE".charAt(dniNumber % 23);

           //if DNI is valid return "valid"
            if (dniLetter == dniLetterCalc) {
                res.end("valid");
            }
            //if DNI is not valid return "invalid"
            else {
                res.end("invalid");
            }
        }
    else
    //Receive by querystring a parameter called color
     if(req.url.startsWith('/returnColorCode')){
        //get color var from querystring
        var queryData = url.parse(req.url, true).query;
        var color = queryData.color;
        //read colors.json file and return the rgba field
        var colors = fs.readFileSync('colors.json', 'utf-8');
        colors = JSON.parse(colors);

        //find the color in the json file
        for (var i = 0; i < colors.length; i++) {
            if (colors[i].name == color) {
                color = colors[i].rgba;
            }
        }
        
        //return color code
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(color);
     }
    else
    //if send TellMeAJoke
     if(req.url.startsWith('/TellMeAJoke')){
        //get joke var from querystring
        var queryData = url.parse(req.url, true).query;
        var joke = "123"
        
        //Make a call to the joke api and return a random joke using axios
        const axios = require('axios');
        axios.get('https://official-joke-api.appspot.com/random_joke', { headers: { Accept: 'application/json' } })
        .then(response => {
            joke = response.data.joke;
        })
        .catch(error => {
            console.log(error);
        });

        //return joke
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(joke);
     }
     else
     //create a metod MoviesByDirector that get the name of director and return the movies of that director
        if(req.url.startsWith('/MoviesByDirector')){
            //get director var from querystring
            var queryData = url.parse(req.url, true).query;
            var director = queryData.director;
                        
            //Make a call to the movie api using https://www.omdbapi.com/apikey.aspx  and return a list of movies of that director using axios
            const axios = require('axios');
            axios.get('http://www.omdbapi.com/?apikey=939fa9a6&s=' + director, { headers: { Accept: 'application/json' } })
            .then(response => {
                director = response.data.Search;
            })                       
            .catch(error => {
                console.log(error);
            });
            
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(director);
        }
    else
       //created a method ParseUrl that receive by querystring a url and return the host 
       if(req.url.startsWith('/ParseUrl'))
       {
            
            var queryData = url.parse(req.url, true).query;
            //get url var from querystring
            var get_url = queryData.url;

            //Parse the url and return the protocol, host, port, path, querystring and hash
            const url_parse = require('url');
            const parsedUrl = url_parse.parse(get_url, true);
            const host = parsedUrl.host;
                  
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(host);
        }    
    else
        //created a method ListFiles that receive by querystring the current directory and return the list of files in a directory
        if(req.url.startsWith('/ListFiles'))
        {
            var queryData = url.parse(req.url, true).query;
            //get directory var from querystring
            var directory = queryData.directory;
            
            const fs = require('fs');
            //iterate the directory and return the list of files
            const files = fs.readdirSync(directory);
            const files_array = [];
            files.forEach(file => {
                files_array.push(file);
            });
            const files_array_json = JSON.stringify(files_array);
            
                       
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(files_array_json);
        }
        
    else  
    //created a method GetFullTextFile that receive by querystring the filename
    if(req.url.startsWith('/GetFullTextFile'))
    {
        var queryData = url.parse(req.url, true).query;
        //get filename var from querystring
        var filename = queryData.filename;
        
        //open the filename to read the file
        const fs = require('fs');
        const file = fs.readFileSync(filename, 'utf8');
        const lines = file.split(/\r?\n/);
        const lines_array = [];
        //iterate the file and return the lines that contains the word "Fusce"
        lines.forEach(line => {
            if (line.includes("Fusce")) {
                lines_array.push(line);
            }
        }
        );
       

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(lines_array.length.toString());

    }
    else
    if (trimmedPath === 'get' && method === 'get') {
        const key = queryStringObject.key;
        if (key) {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(`Hello, ${key}`);
        } else {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('key not passed');
        }
    } else {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('method not supported');
    }
});

server.listen(3000, () => {
    console.log('server is listening on port 3000');
});
