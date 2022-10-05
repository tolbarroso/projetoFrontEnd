var SerialPort = require("serialport"); //importa biblioteca do serial
//serialport: reconhece porta e serial; socket: possibilita a comunicação entre o back e a web, servindo como interface
const express = require("express");
const socketIo = require("socket.io");
const http = require("http");
const { parsers } = require("serialport");

//criação do servidor:
const app = express(); //criar app com express
const server = http.createServer(app);
app.use (express.static('telas')); //aqui coloca o nome da pasta com todas as telas do front
const io = require('socket.io')(server);
app.get ('/', (req, res, next) => {
    res.sendFile (__dirname + '/telas/medicamentos.html') //colocar pasta e nome do html
});

//obs: há como criar vários scripts em um html, tanto locais (arquivo.js) quanto tirados na própria web (src=https...)
/*server.listen ( 9999 , () => {
    console.log ('Porta 192.168.0.15:%d ', server.address().port );
})*/
server.listen(1);
//const io = require('socket.io')(app);
//const Server = require('socket.io');
//const io = new Server(server);
//const io = socketIo.listen(server); //irá 'ouvir' o servido

//int comando = 0;
//SerialPort.write(comando)

const Readline = SerialPort.parsers.Readline; //para ler o que há no serial //parser=analisador
const parser = new parsers.Readline({delimiter: '\r\n'}); //irá ler a informação já decodificada e não em bytes
const mySerial = new SerialPort("COM3", {baudRate: 9600,}); //pra alinhar com o baud do serial 
var cc = "1";
mySerial.write("1")


mySerial.pipe(parser); //ligar a porta ao analisador
mySerial.on('open', function () {
    console.log('Conectado');
    var comando  = "50";
    mySerial.write(comando)

   
    //var button = $(this).val(); //pega o valor atribuido ao btn apertado
    //console.log(button); //só pra testar

    //socketIo.emit(50, () => {
        //console.log(response); // "got it"
     // });
//colocar function abaixo aqui dentro? ou fica desnecessário? testar
})

//RECEBENDO DADOS DA WEB 
/*io.sockets.on('connection', function (socket) {
    socket.on('btnAction', function(btn){
        var retorno = btn.value; //associar com um btn do html, usar console log só pra checar
        mySerial.write(retorno); //enviando o dado pelo serial
        //<button class="btn-preparar" value="1"> Acender Led </button> //esse value será oq for passado
    })
})*/


