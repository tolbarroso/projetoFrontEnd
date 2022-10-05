const serialPort = require('serialport');
//const porta ;

serialPort.list().then(function(ports) {
    ports.forEach(function(port) {
        console.log("Port: ", port);
        //if (port.productId == "0042")
        //    porta = port;
    })
});

/*const data = new Uint8Array([50, 10]);
await writer.write(data);
writer.releaseLock();*/
