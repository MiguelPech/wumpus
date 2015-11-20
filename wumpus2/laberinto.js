var Caverna = require("./cueva");

var laberinto = function (m, n) { //crear laberinto	
var cueva1 = new Caverna();

for (var i = 0; i <= m; i++) {
	for (var j = 0; j >= n; j++) {
		cueva1.setPosicion(i,j);
		laberinto1[i][j]=cueva1; 
	};
};
}

laberinto.prototype.generarmundo = function (m,n,Nw,Np,Nm) {
var fil = 0;
var col = 0;

	//coloca el numero de wumpus
	cant = 0;
	while (cant<Nw) {
		fil = Math.floor( Math.random()*m);
		col = Math.floor( Math.random()*n);
		if (laberinto1[fil][col].getContenido() == 'N') {
			laberinto1[fil][col].SetContenido('w');
			cant++;
		};
	}

	//coloca el numero de pozos
	cant = 0;
	while (cant<Np) {
		fil = Math.floor( Math.random()*m);
		col = Math.floor( Math.random()*n);
		if (laberinto1[fil][col].getContenido() == 'N') {
			laberinto1[fil][col].setContenido('P');
			cant++;
		};
	}

	//coloca el numero de cuavas con mrcielagos
	cant = 0;
	while (cant<Nm) {
		fil = Math.floor( Math.random()*m);
		col = Math.floor( Math.random()*n);
		if (laberinto1[fil][col].getContenido() = 'N') {
			laberinto1[fil][col].setContenido('M');
			cant++;
		};
	}

	//coloca la flecha
	cant = 0;
	while (cant<1) {
		fil = Math.floor( Math.random()*m);
		col = Math.floor( Math.random()*n);
		if (laberinto1[fil][col].GetValue() == 'N') {
			laberinto1[fil][col].SetValue('F');
			cant++;
		};
	}

	//coloca el oro
	cant = 0;
	while (cant<1) {
		fil = Math.floor( Math.random()*m);
		col = Math.floor( Math.random()*n);
		if (laberinto1[fil][col].GetValue() = 'n') {
			laberinto1[fil][col].SetValue('O');
			cant++;
		};
	}
}

laberinto.prototype.AnalizarSensaciones=function(m,n) {
	for (var i = 0; i < m; i++) {
		for (var j = 0; j < n; j++) {
			//si esta en la esuqina superior izq
			if (i==0 && j==0) {
				if (laberinto1[i][j+1].getContenido()=='W' || (laberinto1[i+1][j].getContenido()=='W')) {
					laberinto1[i][j].setPeste();
				};
				if (laberinto1[i][j+1].getContenido()=='P' || (laberinto1[i+1][j].getContenido()=='P')) {
					laberinto1[i][j].setBrisa();
				};
				if (laberinto1[i][j+1].getContenido()=='M' || (laberinto1[i+1][j].getContenido()=='M')) {
					laberinto1[i][j].setAleteo();
				};
			};

			//si esta en la primera fila que no sea esquina	
			if (i==0 && j!=0 && j!=n) {
				if (laberinto1[i][j+1].getContenido()=='W' || laberinto1[i][j-1].getContenido()=='W' || laberinto1[i+1][j].getContenido()=='W') {
					laberinto1[i][j].setPeste();
				};
				if (laberinto1[i][j+1].getContenido()=='P' || laberinto1[i][j-1].getContenido()=='P' || laberinto1[i+1][j].getContenido()=='P') {
					laberinto1[i][j].setBrisa();
				};
				if (laberinto1[i][j+1].getContenido()=='M' || laberinto1[i][j-1].getContenido()=='M' || laberinto1[i+1][j].getContenido()=='M') {
					laberinto1[i][j].setAleteo();
				};
			};

			//si esta en la esquina superior der
			if (i==0 && j==n) {
				if (laberinto1[i][j-1].getContenido()=='W' || (laberinto1[i+1][j].getContenido()=='W')) {
					laberinto1[i][j].setPeste();
				};
				if (laberinto1[i][j-1].getContenido()=='P' || (laberinto1[i+1][j].getContenido()=='P')) {
					laberinto1[i][j].setBrisa();
				};
				if (laberinto1[i][j-1].getContenido()=='M' || (laberinto1[i+1][j].getContenido()=='M')) {
					laberinto1[i][j].setAleteo();
				};
			};

			//si esta en la ultima fila que no sea esquina
			if (i==m && j!=0 && j!=n) {
				if (laberinto1[i][j+1].getContenido()=='W' || laberinto1[i][j-1].getContenido()=='W' || laberinto1[i-1][j].getContenido()=='W') {
					laberinto1[i][j].setPeste();
				};
				if (laberinto1[i][j+1].getContenido()=='P' || laberinto1[i][j-1].getContenido()=='P' || laberinto1[i-1][j].getContenido()=='P') {
					laberinto1[i][j].setBrisa();
				};
				if (laberinto1[i][j+1].getContenido()=='M' || laberinto1[i][j-1].getContenido()=='M' || laberinto1[i-1][j].getContenido()=='M') {
					laberinto1[i][j].setAleteo();
				};
			};

			//si esta en la esquina inferior izq
			if (i==m && j==0) {
				if (laberinto1[i][j+1].getContenido()=='W' || (laberinto1[i-1][j].getContenido()=='W')) {
					laberinto1[i][j].setPeste();
				};
				if (laberinto1[i][j+1].getContenido()=='P' || (laberinto1[i-1][j].getContenido()=='P')) {
					laberinto1[i][j].setBrisa();
				};
				if (laberinto1[i][j+1].getContenido()=='M' || (laberinto1[i-1][j].getContenido()=='M')) {
					laberinto1[i][j].setAleteo();
				}; 
			};

			//si esta en la primera columna que no sea esquina
			if (j==0 && i!=0 && i!=m) {
				if (laberinto1[i][j+1].getContenido()=='W' || laberinto1[i-1][j].getContenido()=='W' || laberinto1[i+1][j].getContenido()=='W') {
					laberinto1[i][j].setPeste();
				};
				if (laberinto1[i][j+1].getContenido()=='P' || laberinto1[i-1][j].getContenido()=='P' || laberinto1[i+1][j].getContenido()=='P') {
					laberinto1[i][j].setBrisa();
				};
				if (laberinto1[i][j+1].getContenido()=='M' || laberinto1[i-1][j].getContenido()=='M' || laberinto1[i+1][j].getContenido()=='M') {
					laberinto1[i][j].setAleteo();
				};
			};

			//si esta en la ultima columna que no sea esquina
			if (j==n && i!=0 && i!=m) {
				if (laberinto1[i][j-1].getContenido()=='W' || laberinto1[i-1][j].getContenido()=='W' || laberinto1[i+1][j].getContenido()=='W') {
					laberinto1[i][j].setPeste();
				};
				if (laberinto1[i][j-1].getContenido()=='P' || laberinto1[i-1][j].getContenido()=='P' || laberinto1[i+1][j].getContenido()=='P') {
					laberinto1[i][j].setBrisa();
				};
				if (laberinto1[i][j-1].getContenido()=='M' || laberinto1[i-1][j].getContenido()=='M' || laberinto1[i+1][j].getContenido()=='M') {
					laberinto1[i][j].setAleteo();
				};
			};

			//si esta en la esquina inferior der
			if (i==m && j==n) {
				if (laberinto1[i][j+1].getContenido()=='W' || (laberinto1[i-1][j].getContenido()=='W')) {
					laberinto1[i][j].setPeste();
				};
				if (laberinto1[i][j+1].getContenido()=='P' || (laberinto1[i-1][j].getContenido()=='P')) {
					laberinto1[i][j].setBrisa();
				};
				if (laberinto1[i][j+1].getContenido()=='M' || (laberinto1[i-1][j].getContenido()=='M')) {
					laberinto1[i][j].setAleteo();
				};
			};

			if ((i>0 && i<m) && (j>0 && j<n)) {
				if (laberinto1[i][j+1].getContenido()=='W' || laberinto1[i][j-1].getContenido()=='W' || laberinto1[i-1][j].getContenido()=='W' || laberinto1[i+1][j].getContenido()=='W') {
					laberinto1[i][j].setPeste();
				};
				if (laberinto1[i][j+1].getContenido()=='P' || laberinto1[i][j-1].getContenido()=='P' || laberinto1[i-1][j].getContenido()=='P' || laberinto1[i+1][j].getContenido()=='P') {
					laberinto1[i][j].setBrisa();
				};
				if (laberinto1[i][j+1].getContenido()=='M'|| laberinto1[i][j-1].getContenido()=='M' || laberinto1[i-1][j].getContenido()=='M' || laberinto1[i+1][j].getContenido()=='M') {
					laberinto1[i][j].setAleteo();
				};
			};
		};
	}
}

laberinto.prototype.getCueva = function(x,y) {
	return laberinto1[x][y];
}

module.exports = laberinto;
