var laberinto = require("./laberinto");
var caverna = require("./cueva");

var cazador = function (laberinto1, m, n) {
	var cueva1 = new caverna();
	var cont=0, x=0, y=0;
	while(cont<1){
		x = Math.floor( Math.random()*m);
		y = Math.floor( Math.random()*n);
		cueva1= laberinto1.getCueva(x,y);
		if (cueva1.getContenido()=='N') {
			xCazador=x;
			yCazador=y;
			tengoFlecha=0;
			cont++;
		};
	}

}

cazador.prototype.getX=function(){
	return xCazador;
}

cazador.prototype.getY=function(){
	return yCazador;
}

cazador.prototype.setX=function(x1){
	xCazador=x1;
}

cazador.prototype.setY=function(y1){
	yCazador=y1;
}

cazador.prototype.flecha=function(){
	return tengoFlecha;
}














