/*

  Requisitos: 

  La nave del usuario disparar� 2 misiles si est� pulsada la tecla de
  espacio y ha pasado el tiempo de recarga del arma.

  El arma tendr� un tiempo de recarga de 0,25s, no pudi�ndose enviar
  dos nuevos misiles antes de que pasen 0,25s desde que se enviaron
  los anteriores



  Especificaci�n:

  - Hay que a�adir a la variable sprites la especificaci�n del sprite
    missile

  - Cada vez que el usuario presione la tecla de espacio se a�adir�n
    misiles al tablero de juego en la posici�n en la que est� la nave
    del usuario. En el c�digo de la clase PlayerSip es donde tienen
    que a�adirse los misiles

  - La clase PlayerMissile es la que implementa los misiles. Es
    importante que la creaci�n de los misiles sea poco costosa pues va
    a haber muchos disparos, para lo cual se declarar�n los m�todos de
    la clase en el prototipo

*/
describe("Clase PlayerMissile", function(){
	var canvas, ctx;
	
	beforeEach(function(){
	loadFixtures('index.html');
	
	canvas=$('#game')[0];
	expect(canvas).toExist();
	
	ctx=canvas.getContext('2d');
	expect(ctx).toBeDefined();
	
	oldGame=Game;
	Game = {width: 320, height:480};
	});

	afterEach(function(){
	Game=oldGame;
	});

	SpriteSheet.map = {
   	 	ship: { sx: 0, sy: 0, w: 37, h: 42, frames: 1 },
   	 	missile: { sx: 0, sy: 30, w: 2, h: 10, frames: 1 }
	};

	it("draw", function(){
		var pmisil = new PlayerMissile(1,1);
		var board = {remove : function(){return true}};
		pmisil.board = board;
		spyOn(SpriteSheet,"draw");
		pmisil.draw(ctx);
		expect(SpriteSheet.draw).toHaveBeenCalled();
	});

	it("step", function(){
		var pmisil = new PlayerMissile(1,1);
		var board = {remove : function(){return true}};
		pmisil.board = board;
		pmisil.step(1);
		expect(pmisil.y).toBe(-709);
	});

	it("Construtor", function(){
		var pmisil = new PlayerMissile(1,1);
		expect(pmisil.w).toEqual(2);
		expect(pmisil.h).toEqual(10);
		expect(pmisil.x).toEqual(0);
		expect(pmisil.y).toEqual(-9);
		expect(pmisil.vy).toEqual(-700);
	});

	it("Disparo", function(){
	});







});
