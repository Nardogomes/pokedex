/* Retona o estado modificado da variáveis */
import { parsePokemonInfo } from "@/utils";
import state from "./state";

export default {
	get pokemonsInfo() {
		return state.list.map(parsePokemonInfo);
	}
};
