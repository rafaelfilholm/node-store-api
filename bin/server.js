const app = require('../src/app');
const debug = require('debug')('nodeapi:bin:server');
const http = require('http');

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

server.listen(port, ()=>console.log(`Server running on http://localhost:${port}/`));

// Manipulação de eventos
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(value){
    const port = parseInt(value, 10);
    
    if(isNaN(port)){
        return value;
    }
    if(port >= 10){
        return port;
    }
    return false;
}

function onError(error){
    if(error.syscall !== 'listen'){
        throw error;
    }
    const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;
    switch(error.code){
        case 'EACESS':
            console.error(`${bind} requires elevated privileges.`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(`${bind} is already in use.`);
            process.exit(1);
            break;
        default:
            throw error;
    }   
}

function onListening(){
    const addr = server.address();
    const bind = typeof addr === 'string' ? `Pipe ${addr}` : `Port ${addr.port}`;
    debug(`Listening on ${bind}`);
}