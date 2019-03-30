const Server = require('socket.io');
const PORTIO  = 4040;
const server = require('http').Server();
server.listen(PORTIO);
const io = Server(server);
io.on('connection',function(so){
    so.on('riego', (datos)=>{
        console.log(datos)
        so.broadcast.emit('riegopi', datos);
    })
    so.on('eliminar', (datos)=>{
        console.log(datos)
        so.broadcast.emit('eliminarpi', datos);

    })
})
