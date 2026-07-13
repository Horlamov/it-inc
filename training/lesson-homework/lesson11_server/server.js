const http = require('http');

const server = http.createServer((request, response) => {
    response.write('it-Kamasutra');
    response.end();
});
server.listen(3003);