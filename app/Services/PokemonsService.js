import { ProxyState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { pokeApi } from "../Services/AxiosService.js"

class PokemonsService {
    async getPokemon() {
        const res = await pokeApi.get()
        // console.log("logging res", res.data.results)
        ProxyState.pokemon = res.data.results
    }

    async setActivePokemon(pokename) {
        const res = await pokeApi.get(pokename)
        ProxyState.activePokemon = new Pokemon(res.data)
        // console.log(res, "here is the res boss");
    }

}


export const pokemonsService = new PokemonsService();