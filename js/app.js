var Calculadora = {
	teclas:  document.getElementsByClassName('tecla'),
	operando1: 0,
	operando2: 0,
	operacion: "",
	opeAcum: false,
	init: function(){ //2
		this.animarTeclas();
		this.teclaNumerica();
		this.onC();
		this.punto();
		this.signo();
		this.suma();
		this.resta();
		this.multiplicacion();
		this.division();
		this.igual();
	},
	animarTeclas: function(){ //3
		for(i=0; i<this.teclas.length; i++){
			this.teclas[i].addEventListener("mousedown", function(){
				this.classList.add("push")
			})
			this.teclas[i].addEventListener("mouseup", function(){
				this.classList.remove("push")
			})
			this.teclas[i].addEventListener("mouseout", function(){
				this.classList.remove("push")
			})
		}
		
	},
	teclaNumerica: function(){ //5
		var display = document.getElementById("display")
		for(i=0; i<this.teclas.length; i++){
			if(!isNaN(Number(this.teclas[i].id))){
				if(this.teclas[i].id == "0"){ 
					this.teclas[i].addEventListener("click", function(){
						if(display.innerHTML != "0"){
							if(display.innerHTML.length < 8){
								display.innerHTML = display.innerHTML + this.id 
							}
						}
						Calculadora.opeAcum = false;
					})
				}else{
					this.teclas[i].addEventListener("click", function(){
						if(display.innerHTML == "0"){
							display.innerHTML = this.id 
						}else{
							if(display.innerHTML.length < 8){
								display.innerHTML = display.innerHTML + this.id 
							}
						}
						Calculadora.opeAcum = false;
					})
				}
			}
		}
	},
	onC: function(){ //6
		var display = document.getElementById("display")
		var tON = document.getElementById("on")
		tON.addEventListener("click", function(){
			display.innerHTML = "0"
		})
	},
	punto: function(){ //7
		var display = document.getElementById("display")
		var tPunto = document.getElementById("punto")
		tPunto.addEventListener("click", function(){
			if(display.innerHTML.indexOf(".") < 0 && display.innerHTML.length < 7){
				display.innerHTML = display.innerHTML + "."
			}
		})
	},
	signo: function(){ //8
		var display = document.getElementById("display")
		var sign = document.getElementById("sign")
		sign.addEventListener("click", function(){
			if(display.innerHTML != "0"){
				if(display.innerHTML.indexOf("-") < 0){
					display.innerHTML = "-" + display.innerHTML
				}else{
					display.innerHTML = display.innerHTML.slice(1)
				}
			}
		})
	},
	valida: function(num){ //9
		if(num.length <= 8){
			return num
		}else{
			return num.slice(0,8)
		}	
	},
	suma: function(){ //4, 10
		var display = document.getElementById("display")
		var sign = document.getElementById("mas")
		sign.addEventListener("click", function(){
			Calculadora.operando1 = Number(display.innerHTML)
			Calculadora.operacion = "sum"
			display.innerHTML = ""
		})
	},
	resta: function(){ //4, 10
		var display = document.getElementById("display")
		var sign = document.getElementById("menos")
		sign.addEventListener("click", function(){
			Calculadora.operando1 = Number(display.innerHTML)
			Calculadora.operacion = "res"
			display.innerHTML = ""
		})
	},
	multiplicacion: function(){ //4, 10
		var display = document.getElementById("display")
		var sign = document.getElementById("por")
		sign.addEventListener("click", function(){
			Calculadora.operando1 = Number(display.innerHTML)
			Calculadora.operacion = "mul"
			display.innerHTML = ""
		})
	},
	division: function(){ //4, 10
		var display = document.getElementById("display")
		var sign = document.getElementById("dividido")
		sign.addEventListener("click", function(){
			Calculadora.operando1 = Number(display.innerHTML)
			Calculadora.operacion = "div"
			display.innerHTML = ""
		})
	},
	igual: function(){ //4, 10
		var display = document.getElementById("display")
		var sign = document.getElementById("igual")
		sign.addEventListener("click", function(){
			if(Calculadora.opeAcum){
				Calculadora.operando1 =Number(display.innerHTML)
			}else{
				Calculadora.operando2 =Number(display.innerHTML)
			}
			var result = 0
			switch(Calculadora.operacion){
				case "sum":
					result = Calculadora.operando1 + Calculadora.operando2
					display.innerHTML = Calculadora.valida(result.toString())
					Calculadora.opeAcum = true
					break;
				case "res":
					result = Calculadora.operando1 - Calculadora.operando2
					display.innerHTML = Calculadora.valida(result.toString())
					Calculadora.opeAcum = true
					break;
				case "mul":
					result = Calculadora.operando1 * Calculadora.operando2
					display.innerHTML = Calculadora.valida(result.toString())
					Calculadora.opeAcum = true
					break;
				case "div":
					result = Calculadora.operando1 / Calculadora.operando2
					display.innerHTML = Calculadora.valida(result.toString())
					Calculadora.opeAcum = true
					break;
			}
		})
	}
}

Calculadora.init(); //2