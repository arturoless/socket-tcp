const Server = require('socket.io');
const PORTIO  = 4040;
const server = require('http').Server();
server.listen(PORTIO); 
const io = Server(server);

const PORTIO2  = 5050;
const server2 = require('http').Server();
server2.listen(PORTIO2); 
const io2 = Server(server2);

io2.on('connection',function(socket){
    
    io.on('connection',function(socket2){
        socket.on('riego', (data)=>{
            console.log(data)
            socket2.emit('riegopi',data);
        })
        socket.on('eliminar', (data)=>{
            socket2.emit('eliminarpi',data);
            console.log(data)
           
        })
        socket.on('test', (data)=>{
            console.log(data)
        })
        
        
    })
    
})

