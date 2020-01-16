var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');

http.createServer(function (request, response) {
    // fs.readFile('./html/test_res.html', function(error, data) {
    //     if (error) {
    //         console.log(error.message);
    //     } else {
    //         response.writeHead(200, {'Content-Type': 'text/html'}); //헤더정보
    //         response.end(data);
    //     }
    // });

    // fs.readFile('./img/aaaa.jpg', function(error, data) {
    //     if (error) {
    //         console.log(error.message);
    //     }
    //     else {
    //         response.writeHead(200, {'Content-Type':'image/jpeg'});
    //         response.end(data);
    //     }
    // });

    // fs.readFile('./img/aaaa.jpg', function(error, data) {
    //         if (error) {
    //             console.log(error.message);
    //         }
    //         else {
    //             response.writeHead(302, {'Location': 'https://cs.dongduk.ac.kr'});
    //             response.end();
    //         }
    //     });
    var pathName = url.parse(request.url).pathname;
    // if (pathName == '/') {
    //     fs.readFile('./html/index.html', function(error, data) {
    //         response.writeHead(200, {'Content-Type': 'text/html'});
    //         response.end(data);
    //     });
    // }
    // else if (pathName == '/second') {
    //     fs.readFile('./html/second.html', function(error, data) {
    //         response.writeHead(200, {'Content-Type': 'text/html'});
    //         response.end(data);
    //     });
    // }
    // else if (pathName == '/cs') {
    //     fs.readFile('./html/second.html', function(error, data) {
    //         response.writeHead(302, {'Location': 'https://cs.dongduk.ac.kr'});
    //         response.end();
    //     });
    // }
    // }); 
    
    // response.writeHead(200, {'Content-Type':'text/html'});
    // response.end('<h1>' + JSON.stringify(query) + '</h1>');
        
    if (request.method == 'GET') {
        fs.readFile('./html/login.html', function (error, data) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(data);
        });
    } else if (request.method == 'POST') {
        request.on('data', function(data) {
            var text = "";
            text += data;
            var parsedStr = querystring.parse(text, '&', '=');

            console.log(parsedStr.id);
            console.log(parsedStr.pwd);

            if (parsedStr.id == parsedStr.pwd) {
                response.writeHead(302, {'Location': 'https://cs.dongduk.ac.kr'});
                response.end();
            } else {
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.end('<h1>LogIn Failed!!!</h1>');
            }

            
        });
    }
}).listen(1234, function() {
    console.log('Server runnung at http://127.0.0.1:1234');
});
