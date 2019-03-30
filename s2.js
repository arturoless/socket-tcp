const os = require('os')
const net = require('net')
const Server = require('socket.io');
const PORTIO  = 4040;
const server = require('http').Server();
server.listen(PORTIO); 
const io = Server(server);

var interfaces = os.networkInterfaces()
var wifi = interfaces['eth0']
if(wifi==null){
    wifi = interfaces['Wi-Fi']
    var ipv4 = wifi[1]
}
else{
    var ipv4 = wifi[0]
}
var HOST = ipv4['address']
var PORT = process.env.PORT || 5500

io.on('connection',function(so){
    const serverTCP = net.createServer(function(socket){
        console.log('-----------------------Usuario nuevo-------------------------------')
    so.on('riego', (datos)=>{
        socket.write(datos)
       
    })
    so.on('eliminar', (datos)=>{
        socket.write(datos)
    })
    })
})
    


serverTCP.listen(PORT,() => {
    console.log('-------------------------------------------------------------------')
    console.log('Conectado en: '+HOST+':' + PORT);
    console.log('-------------------------------------------------------------------')
  });

