const http = require('http')
var url = require('url')

const port = 2999

const handler = (request, response) => {
    if (request.url !== '/favicon.ico') {

        console.log((url.parse(request.url).pathname))
        var query = require('url').parse(request.url,true).query;
        var first = parseFloat(query.first);
        var last = parseFloat(query.last);


        if ((url.parse(request.url).pathname) === '/add'){

    
            var wynik = first + last;
            console.log(first)
            console.log(last)
            console.log(first+last)
            console.log(wynik)
            var pathname = url.parse(request.url).pathname;
            response.write((String(wynik)))
            response.end();
            }
        else if ((url.parse(request.url).pathname) === '/multiplication'){

            var wynik = first * last;
            console.log(first)
            console.log(last)
            console.log(first+last)
            console.log(wynik)
            var pathname = url.parse(request.url).pathname;
            response.write((String(wynik)))
            response.end();
            }
        else{
            //response.write((String("nie wybrales typu operacj")))
            //response.end();
        }    
}}


const server = http.createServer(handler)

server.listen(port, (err) => {

    if(err){
        console.log('error')
    }

    console.log('running')
})