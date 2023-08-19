const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase;



function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);

  var options = {
    isStatic: true
  };

  //Qual o código correto para criar uma base retangular para a base do player
  //playerBase = rectangle(200, 350, 180, 150, options);
  //playerBase = Bodies(200, 350, 180, 150, options);
  //playerBase = Bodies.rectangle(200, 350, 180, 150, options);
  //playerBase = Bodies.retangulo(200, 350, 180, 150, options);

  World.add(world, playerBase);

  //Qual o código correto para criar o corpo do player retangular
  //player = Bodies.rectangle(250, playerBase.position.y - 160, 50, 180, options);
  //player = rectangle(250, playerBase.position.y - 160, 50, 180, options);
  //player = Bodies(250, playerBase.position.y - 160, 50, 180, options);
  //player = Bodies.retangle(250, playerBase.position.y - 160, 50, 180, options);

  
  World.add(world,player)
}

function draw() {

  //Qual é o código correto para mostrar a imagem de fundo na tela
  //background(backgroundImg);
  //fundo(backgroundImg);
  //imgFundo(backgroundImg);
  //backGround(backgroundImg);

  Engine.update(engine);
  image(baseimage,playerBase.position.x,playerBase.position.y,180,150)
  image(playerimage,player.position.x,player.position.y,50,180)

  // Título
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}




