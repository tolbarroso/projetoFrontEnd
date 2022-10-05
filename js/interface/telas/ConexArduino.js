var SerialPort = require("serialport");
const arduino = new SerialPort("COM3", {baudRate: 9600,});

arduino.on('btnAction', function(btn){
    var retorno = btn.value; 
    for (let i = 1; i <= 7; i++) {
        if (retorno == i) {
            setTimeout(arduino.write('i'), 1000);
        }
    }
})


$("button").click(function() {
    var button = $(this).val(); //pega o valor atribuido ao btn apertado
    console.log(button); //só pra testar
    arduino.emit('btnAction', {
        value: button.toString()
    })
})

/*function paciente1() {
    arduino.write('1'); //cada função corresponde a uma pág
}

function paciente2() {
    arduino.write('2');
}

function paciente3() {
    arduino.write('3');
}

function paciente4() {
    arduino.write('4');
}

function paciente5() {
    arduino.write('5');
}

function paciente6() {
    arduino.write('6');
}

function paciente7() {
    arduino.write('7');
}
setTimeout(paciente1, 1000);
setTimeout(paciente2, 5000);

    $("button").click(function() { //pode ficar aqui?
    const call = io();
    var button = $(this).val(); //pega o valor atribuido ao btn apertado
    console.log(button); //só pra testar
    call.emit('btnAction', {
        value: button.toString()
    })

    else if (retorno == 2) {
        setTimeout(paciente2, 1000);
    }
    else if (retorno == 2) {
        setTimeout(paciente3, 1000);
    }
    else if (retorno == 1) {
        setTimeout(paciente4, 1000);
    }
    else if (retorno == 1) {
        setTimeout(paciente5, 1000);
    }
    else if (retorno == 1) {
        setTimeout(paciente6, 1000);
    }
    else {
        setTimeout(paciente7, 1000);
    }
})*/

