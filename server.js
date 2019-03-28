const os = require('os')
const net = require('net')
var express = require("express");
var app = new express();
var http = require("http").Server(app);
var io = require("socket.io")(http);
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
var PORT = process.env.PORT || 3000
var server = net.createServer(function(socket){
    console.log('-----------------------Usuario nuevo-------------------------------')
    socket.on('data', (data)=>{ 
        datos = JSON.parse(data.toString()); 
        io.on('connection',function(socket){
            socket.emit('temperatura',datos["temp"]);
            socket.emit('humedad',datos["hum"]);
        console.log("temperatura:"+datos["temp"])
        console.log("humedad:"+datos["hum"])
        })
    })
    socket.on('close', ()=>{
        console.log('Usuario desconectado')
    })
})

server.listen(PORT,() => {
    console.log('-------------------------------------------------------------------')
    console.log('Conectado en: '+HOST+':' + PORT);
    console.log('-------------------------------------------------------------------')
  });

