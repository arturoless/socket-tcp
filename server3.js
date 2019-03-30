const io = require('socket.io-client');
const socket = io.connect('http://157.230.169.186:5050', {reconnect: true});
const sudo = require('sudo-js');
sudo.setPassword('vasquez123');
const exec = require('child_process').exec

// Add a connect listener
socket.on('connect', function () {
  console.log(':)')
});
socket.on('riegopi', function(data){
    console.log(data)
    // exec('echo "'+"12 * * * *"+' python3 /home/isaac/consPlanta/bomba.py" >> /home/isaac/consPlanta/cron')
    // var command = ['crontab', '>>', '/home/isaac/consPlanta/cron'];
    // sudo.exec(command, function(err, pid, result) {
    //   console.log(result); // output '';
    // });
});
socket.on('eliminarpi', function(data){
  console.log(data)
  // exec('echo "'+"12 * * * *"+' python3 /home/isaac/consPlanta/bomba.py" >> /home/isaac/consPlanta/cron')
  // var command = ['crontab', '>>', '/home/isaac/consPlanta/cron'];
  // sudo.exec(command, function(err, pid, result) {
  //   console.log(result); // output '';
  // });
});