class heroi{
	constructor (nome, idade, tipo){
    this.nome = nome
    this.idade = idade
    this.tipo = tipo 
    }
    atacar(){
    	let ataque = ""
    	if(this.tipo === "mago"){
        	ataque = "magia"
        }
        else if(this.tipo === "guerreiro"){
        	ataque = "espada"	
        }
        else if(this.tipo === "monge"){
        	ataque = "artes marciais"	
        }
        else if (this.tipo === "ninja"){
        	ataque = "shuriken"
        }
		console.log (`O ${this.tipo} atacou usando ${ataque}`)
	}
}

let h1 = new heroi("Lee", 25, "ninja")
	h1.atacar()
let h2 = new heroi("San", 25, "mago")
	h2.atacar()
let h3 = new heroi("Goku", 25, "guerreiro")
	h3.atacar()
let h4 = new heroi("Bob Esonja", 25, "monge")
	h4.atacar()
