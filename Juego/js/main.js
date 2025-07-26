
var fondoJuego, vidas=3, monedas=3 ;
var emisor;

                        //x,y (alto y ancho)

var juego = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, 'area_juego');


var  FirstState = {
    preload: function(){
        //Aqui se precargan elementos caché (audio,imagenes,etc.)

        juego.load.image('fondo' , 'img/Cielo.jpg' );
        juego.load.audio('roluki' , 'audio/audio.mp3')
        juego.load.spritesheet('button', 'img/botones.png', 193, 71);
         juego.load.image('fondo2' , 'img/polis.jpg' );
         
         juego.load.spritesheet('personajes', 'img/fldsmdfr.png', 272, 387.5);
    
          juego.load.image('pasto1','img/pasto1 (1).png');
          juego.load.image('pasto2','img/pasto1 (1).png');
          juego.load.image('hoja','img/hoja.png');
          juego.load.image('arbol','img/pixelpiramide.png',1600,600);

          //ego.load.image('arbol','img/arbol.png', 1600, 600);


          juego.load.spritesheet('pausa','img/pausa.png', 80,80);
          juego.load.spritesheet('restart','img/restart.png', 80,80);
          juego.load.spritesheet('salir','img/salir.png', 80,80);
          juego.load.spritesheet('hoja','img/hoja.png', 1240,826);
          juego.load.spritesheet('gota','img/gota.png', 512,512);
          juego.load.image('apple' , 'img/manzana.png' );
          juego.load.image('moneda' , 'img/moneda.png' );
        juego.load.spritesheet('monst', 'img/monstruo.png', 256, 256); 
        juego.load.image('hola' , 'img/hola.png' );

         
    },

    create: function(){

        //Se crean los elementos en la composición
        fondoJuego = juego.add.tileSprite(0,-300,3000,2000,'fondo');
               //ondoJuego = juego.add.tileSprite(0,0,1300,644, 'fondo');
               

        //key, volume, loop  
        
        monster = juego.add.sprite(880,300, 'monst');
        monster.animations.add('aleteo', [0,1,2,3], 10, true);
        monster.animations.play('aleteo');
        monster.scale.setTo(0.3);

        musica = juego.add.audio('roluki' , 0.2, true);
        musica.play();
      

        
        boton3 = juego.add
        emisor = juego.add.emitter(1500,-10,200);
        emisor.makeParticles('hoja');
        emisor.area.width = 1600;
        emisor.minParticleSpeed.setTo(-400, -500);
        emisor.maxParticleSpeed.setTo(400, 500);
        emisor.minrotation = 5;
        emisor.maxrotation = 9;
        emisor.minParticleScale = 0.02;
        emisor.maxParticleScale = 0.05;
        emisor.gravity.x = -300;
        emisor.flow(3000,1000,10,-1);

        emisor2 = juego.add.emitter(580,-10,200);
        emisor2.makeParticles('gota');
        emisor2.area.width = 1600;
        emisor2.minParticleSpeed.setTo(-400, -500);
        emisor2.maxParticleSpeed.setTo(600, 500);
        emisor2.minrotation = 0;
        emisor2.maxrotation = 5;
        emisor2.minParticleScale = 0.02;
        emisor2.maxParticleScale = 0.05;
        emisor2.gravity= 100;
        emisor2.flow(3000,1000,10,-1);


        function actionOnClick(){
                console.log("ksksksksk");
                fondoJuego = juego.add.tileSprite(0,0,800,800, 'fondo2');
                
              
              
                //(origen x, origrn y, limite x, limite y)

                
                
        }
            
                         
            
                    

        //Colocar al personaje en la posoción 0,0
        //Colocar debajo de donde creaste el personaje
        arbol = juego.add.tileSprite(1300, 0, 1600, 600, 'arbol');
        pastouno = juego.add.tileSprite(0, 570, 300, 200, 'pasto1');
        pasto2 = juego.add.tileSprite(0, 585, 300, 200, 'pasto2');
        pasto3 = juego.add.tileSprite(500, 495, 300, 200, 'pasto1');
        pasto4= juego.add.tileSprite(500, 510, 300, 200, 'pasto2');
        pasto5 = juego.add.tileSprite(1000, 485, 300, 200, 'pasto1');
        pasto6 = juego.add.tileSprite(1000, 500, 300, 200, 'pasto2');
        pasto7 = juego.add.tileSprite(1550, 540, 300, 100, 'pasto1');
        pasto8 = juego.add.tileSprite(1550, 555, 300, 100, 'pasto2');
        pasto9 = juego.add.tileSprite(2050, 500, 300, 100, 'pasto1');
        pasto10 = juego.add.tileSprite(2050, 515, 300, 100, 'pasto2');
        pasto11 = juego.add.tileSprite(2690, 500, 200, 100, 'pasto1');
        pasto12 = juego.add.tileSprite(2690, 515, 200, 100, 'pasto2');


        personaje = juego.add.sprite(50, 0, 'personajes');
        personaje.scale.setTo(0.3);
        juego.world.setBounds(0, 0, 3000, 600);
juego.camera.follow(personaje);

        //juego.world.setTextBounds(0,0,3000,600);
        //juego.camera.follow(personaje);
        
        

        
       

        derecha = juego.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        izquierda = juego.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        arriba = juego.input.keyboard.addKey(Phaser.Keyboard.UP);
        abajo = juego.input.keyboard.addKey(Phaser.Keyboard.DOWM);
        

                //('key' , spritequesemuestran, frames , loop)
        personaje.animations.add('derecha', [0,1,2], 6, true);
         personaje.animations.add('izquierda', [3,4,5], 6, true);
        personaje.animations.play('derecha');
        

        juego.physics.enable(personaje);
        juego.physics.enable(pasto2);
        juego.physics.enable(pasto4);
        juego.physics.enable(pasto6);
        juego.physics.enable(pasto8);
        juego.physics.enable(pasto10);
        juego.physics.enable(pasto12);




        juego.physics.enable(monster);

        

        apple = juego.add.sprite(1150,300, 'apple');
        apple.scale.setTo(0.15);
        juego.physics.enable(apple);


        moneda = juego.add.sprite(700,300, 'moneda');
        moneda.scale.setTo(0.25);
        juego.physics.enable(moneda);

        moneda2 = juego.add.sprite(2000,400, 'moneda');
        moneda2.scale.setTo(0.25);
        juego.physics.enable(moneda2);

        pasto2.body.immovable = true;
        pasto4.body.immovable = true;
        pasto6.body.immovable = true;
        pasto8.body.immovable = true;
        pasto10.body.immovable = true;
        pasto12.body.immovable = true;

    


        personaje.body.gravity.y = 200;
        text1 = juego.add.text(0, 0, "Pausa",{font: "bold 32px Arial", fill: "red", boundsAlignH: "center", boundsAlignV: "middle"});
        text1.setTextBounds(680,250,100,32); 
        text1.visible = false;
        txtvidas = juego.add.text(0,0, 'Vidas:'+vidas , { font: 'bold 24px ARIAL' , fill: 'black', boundsAlignH: "center", boundsAlignV: "middle"});
        txtvidas.setTextBounds(680,23,100,18);
        txtvidas.fixedToCamera=true;

        txtmonedas = juego.add.text(0,0, 'Monedas:' , { font: 'bold 24px ARIAL' , fill: 'black', boundsAlignH: "center", boundsAlignV: "middle"});
        txtmonedas.setTextBounds(680,63,100,18);
        txtmonedas.fixedToCamera=true;

        txthola= juego.add.sprite(840,230, 'hola');
        txthola.scale.setTo(0.5);

        
        txthola.visible =false;
         

        function reiniciar(){
            juego.state.restart();
            //musica.stop8;
        }

        function salir(){
            juego.state.start('inicio');
        }

        function pausa(){
            if(juego.paused == true){
                text1.visible =false;
                //btnrestart.visible = true;
                juego.paused = false;
                //btnsalir.visible = true;
            } else if(juego.paused ==false){
                text1.visible = true;
                //btnrestart.visible =false;
                //btnsalir.visible =false;
                juego.paused = true;
            }
        }

boton1 = juego.add.button(10, 10, 'salir' , salir, this, 0, 1, 2);
         boton1.fixedToCamera=true;
  boton1 = juego.add.button(((window.innerWidth)-90),(10), 'pausa' , pausa, this, 0, 1, 2);
        boton1.fixedToCamera=true;

        boton2 = juego.add.button(((window.innerWidth)-90),(100), 'restart' , reiniciar, this, 0, 1, 2);
        boton2.fixedToCamera=true;         

    },
    

    update: function(){
        //Se actualiza el estado cada cierto tiempo (animaciones)
       
        txtvidas.setText('Vidas:' + vidas);
        txtmonedas.setText('Monedas:' + monedas);

       
        juego.physics.arcade.collide(personaje,pasto2);
        juego.physics.arcade.collide(personaje,pasto4);
        juego.physics.arcade.collide(personaje,pasto6);
        juego.physics.arcade.collide(personaje,pasto8);
        

        juego.physics.arcade.collide(personaje,pasto10);
        juego.physics.arcade.collide(personaje,pasto12);




        juego.physics.arcade.collide(personaje,apple);
        juego.physics.arcade.collide(personaje,moneda);
        juego.physics.arcade.collide(personaje,moneda2);

        juego.physics.arcade.collide(personaje,monster);
       


        if(arriba.isDown){
            personaje.position.y -=3;
            personaje.animations.play('arriba');
        }

        if(izquierda.isDown){
            personaje.position.x -=3;
            personaje.animations.play('izquierda');
        }

      

        if(derecha.isDown){
            personaje.position.x +=3;
            personaje.animations.play('derecha');
        }
        

       
        
        if (personaje.position.y <=-60){
            personaje.position.x = 0;
            personaje.position.y = -50;
        }else if (personaje.position.y>=650){
            personaje.position.x = 0;
            personaje.position.y= -50;
            vidas = vidas-1;
        }


        if(juego.physics.arcade.overlap(personaje,apple)){
            apple.destroy();
            vidas = vidas + 1;
        }

        if(juego.physics.arcade.overlap(personaje,moneda)){
            moneda.destroy();
            monedas = monedas + 1;
        }
        if(juego.physics.arcade.overlap(personaje,moneda2)){
            moneda2.destroy();
            monedas = monedas + 1;
        }
        
        if(juego.physics.arcade.overlap(personaje,monster)){
                    txthola.visible = true;
        } else {
            txthola.visible = false;
        }
        
if(vidas == 0){
juego.state.start('gameover');
}
    }
};

var inicio = {
    preload: function(){ 
        
        juego.load.image('burbuja' , 'img/burbuja.png' );
        juego.load.image('burbuja2' , 'img/burbuja2.png' );
        juego.load.spritesheet('play', 'img/play.png', 107, 105);
       
        
       
       

        
    },
     create: function(){
        text1 = juego.add.text(0, 0, "Presiona el botón",{font: "bold 32px Arial", fill: "pink", boundsAlignH: "center", boundsAlignV: "middle"});
        text1.setTextBounds(680,150,100,32); 
        text1 = juego.add.text(0, 0, "para iniciar",{font: "bold 30px Arial", fill: "Silver", boundsAlignH: "center", boundsAlignV: "middle"});
        text1.setTextBounds(680,190,100,32); 
        
        
        emisor = juego.add.emitter(540,800,200);
        emisor.makeParticles('burbuja');
        emisor.area.width = 1600;
        emisor.minParticleSpeed.setTo(-400, -500);
        emisor.maxParticleSpeed.setTo(400, 500);
        emisor.minrotation = 5;
        emisor.maxrotation = 9;
        emisor.minParticleScale = 0.02;
        emisor.maxParticleScale = 0.2;
        emisor.gravity = -100;
        emisor.flow(3000,2500,100,-1);
        //emisor.flow(frecuency,lifespan,quantity, total);
        
        emisor2 = juego.add.emitter(540,800,200);
        emisor2.makeParticles('burbuja2');
        emisor2.area.width = 1600;
        emisor2.minParticleSpeed.setTo(-400, -500);
        emisor2.maxParticleSpeed.setTo(400, 500);
        emisor2.minrotation = 5;
        emisor2.maxrotation = 9;
        emisor2.minParticleScale = 0.02;
        emisor2.maxParticleScale = 0.2;
        emisor2.gravity = -100;
        emisor2.flow(4000,2600,100,-1);

        
        
        botonplay = juego.add.button(680,250, 'play' , play, this, 0, 1, 2,3);
        botonplay.animations.add('colores', [0,1,2,3], 10, true);
        botonplay.animations.play('colores');
        function play(){
            juego.state.start('principal');
            vidas=3;
            monedas=0;
        }

     
    },


    
    update: function () {
        
    }
}

var gameover = {
    preload: function(){ 
        
        juego.load.image('gameover' , 'img/gameover.webp' );
       
        
       
       

        
    },
     create: function(){
        gameover = juego.add.sprite(500, 100, 'gameover');
        enter = juego.input.keyboard.addKey(Phaser.Keyboard.ENTER);
        text1 = juego.add.text(0, 0, "Presiona enter para reiniciar",{font: "bold 32px Arial", fill: "red", boundsAlignH: "center", boundsAlignV: "middle"});
        text1.setTextBounds(680,50,100,32); 
    },


    
    update: function () {
        if(enter.isDown){
           juego.state.start('inicio');
        }
    }
}

juego.state.add('principal' , FirstState);
juego.state.add('inicio', inicio);
juego.state.add('gameover', gameover);

juego.state.start('inicio');
