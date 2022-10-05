
$("button").click(function() {
    const call = io();
    var button = $(this).val(); //pega o valor atribuido ao btn apertado
    console.log(button); //só pra testar
    call.emit('btnAction', {
        value: button.toString()
    })
})