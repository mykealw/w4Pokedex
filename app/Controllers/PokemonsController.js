import { ProxyState } from "../AppState.js";
import { pokemonsService } from "../Services/PokemonsService.js";
import { Pop } from "../Utils/Pop.js";

function _drawPokemon(){
let template = ''
ProxyState.pokemon.forEach(p => template += `<li class="selectable"  onclick="app.pokemonsController.setActivePokemon('${p.name}')">${p.name}</li>`)
// console.log(template, "here the template boss");
document.getElementById("list").innerHTML = template
}

function _drawActivePokemon(){
    console.log(ProxyState.activePokemon, "active pokemon boss" );
    document.getElementById("active").innerHTML = ProxyState.activePokemon.Template
}


export class PokemonsController{
constructor(){
// console.log("hello from controller");
this.getPokemon()
ProxyState.on("pokemon", _drawPokemon)
ProxyState.on("activePokemon", _drawActivePokemon)
}



async getPokemon(){
    try {
        await pokemonsService.getPokemon()
    } catch (error) {
        Pop.toast(error.message, 'error')
        console.log(error);  
    }
}

async setActivePokemon(pokename){
try {
    console.log(pokename);
    await pokemonsService.setActivePokemon(pokename)
} catch (error) {
    Pop.toast(error.message, 'error')
    console.log(error);  
}
}
}