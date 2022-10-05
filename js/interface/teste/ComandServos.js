//comando no terminal precisa de perm do adm -> "node nome.arquivo" será digitado com a PLACA CONECTADA
//FAZER CONEXÃO COM FRONT! html pode se comunicar com mais de um script? pedir cod a carol
//o package.json tem todas as bibliotecas em depencies, e e se for copiar e colar ele em outro dispositivo basta usar npm install no terminal

const {EtherPortClient} = require ("etherport-client")
const {Board, Servo} =  require ("johnny-five");//para segundo tipo de registro da board
var five = require("johnny-five"); //para primeiro tipo de registro (escolher um!)
var btn; //associar com js do front! corresponderá a cada pag

//OPÇÕES DE REGISTRAR A BOARD:
//1.SÓ COM O COM
var board = new five.Board({port: COM3}); //dentro coloca a com/porta correspondente do pc
//2.COM A ETHERNET (IP E ETC)
/*const board = new Board ( {
  port: new EtherPortClient ( {
    host: "192.168.11.88", //IP - é realmente necessário?
    port: COM3, //registro do com, antes tava 0303
    }),
    repl: false, 
} ) */

//servo vs. motor
 
board.on("ready" , () => {  //quando a board ligar, inicia         
  console.log ("Conectado") //confirma conexão
  const servo1 = new Serve(0); // Registrando os servos e suas portas
  const servo2 = new Serve(1);
  const servo3 = new Serve(2);
  btn =1;
  posInicial();

  //quando tiver o banco de dados será possivel associar cada med com um valor, e quando clicar no btn da pag verá qual está presente, com uma cond if(medx = true) -> ativa servo
  /* if (med1 = true) {
    servoOne() //e faria a mesma coisa para os outros 2/ será q já é possivel fazer?/ desse jeito n precisa criar condicional pra cada caso e fica fácil quando tiver mais meds
  }*/

  if (btn = 1) { //associar o valor a cada pag/paciente/caso; obs-> falta pag com os 3 meds (vai ter?)
    servoOne();
    final();
  }
  else if (btn = 2) {
    servoOne();
    servoTwo();
    final();
  }
  else if (btn = 3) {
    servoOne();
    servoTwo();
    servoThree();
    final();
  }
  else if (btn = 4) {
    servoOne();
    servoThree();
    final();
  }
  else if (btn = 5) {
    servoThree();
    final();
  }
  else if (btn = 6) {
    servoTwo();
    servoThree();
    final();
  }
  else if (btn = 7) {
    servoTwo();
    final();
  }

  // Posição 0º 
  function posInicial() {
    servo1.to(0); //isso será definido no arduino? pq se sim só precisa fazer a conexão do js + front com a ide (mas como?)
    servo2.to(0); 
    servo3.to(0); 
  }

  function final() {
    setTimeout(() => {
        process.exit(); //fim do processo
      }, 6500); //depois de 6,5s?
  }
 

  function servoOne() {
    setTimeout(() => {
        servo1.to(180); //gira 180 por 1s (pro remedio cair) e depois de novo, voltando a pos inicial
      }, 1000); 
      servo1.to(180); 
    //return 1;
  }

  function servoTwo() {
    setTimeout(() => {
        servo2.to(180); 
      }, 1000); 
      servo2.to(180); 
    //return 2;
  }

  function servoThree() {
    setTimeout(() => {
        servo3.to(180); 
      }, 1000); 
      servo3.to(180);  
    //return 3;
  }

})