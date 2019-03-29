const os = require('os')
const net = require('net')
// var express = require("express");
// var app = new express();
// var http = require("http").Server(app);
// var io = require("socket.io")(http);
const Server = require('socket.io');
const PORTIO  = 3030;
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
var PORT = process.env.PORT || 4500
var serverTCP = net.createServer(function(socket){
    console.log('-----------------------Usuario nuevo-------------------------------')
    io.on('connection',function(so){

        socket.on('data', (data)=>{
            var datos=JSON.parse(data.toString());
            var temperatura=datos["temp"]
            var humedad=datos["hum"]
            so.emit('temperatura',temperatura);
            so.emit('humedad',humedad);
            console.log(humedad)
            
        })
        socket.on('close', ()=>{
            console.log('Usuario desconectado')
        })
    })
    
})

serverTCP.listen(PORT,() => {
    console.log('-------------------------------------------------------------------')
    console.log('Conectado en: '+HOST+':' + PORT);
    console.log('-------------------------------------------------------------------')
  });

