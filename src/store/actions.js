/* Ponto de entrada das chamadas da API */
import PokeAPI from '@/services/pokeapi';
import state from './state';
import mutations from './mutations';

export default {
  async getPokemons() {
    const {
      setList,
      setIsPokemonSearch,
      setListHasError,
      setListHasNext,
      setListHasComplited,
      updateOffset
    } = mutations;

    try {
      setIsPokemonSearch(false);
      setListHasError(false);
      
      const pokemonsList = await PokeAPI.getPokemons({ limit: state.limit, offset: state.offset });

      if(pokemonsList?.results?.length) {
        const prepareInfo = pokemonsList.results.map(item => PokeAPI.getPokemonByName(item.name));
        const pokemonsInfo = await Promise.all(prepareInfo);
        
        setList(pokemonsInfo);
      }
    } catch (error) {
      
    }
  },
}
