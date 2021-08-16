/* As mutations são responsáveis por editar o estado das variáveis */
import state from './state';

export default {
  updateOffset() {
    state.offset += state.limit;
  },
  setList(list) {
    state.list.push(...list);
    state.tmplist.push(...list);
  },
  setListHasNext(flag) {
    state.listHasNext = flag;
  },
  setListHasComplited(flag) {
    state.listHasCompleted = flag;
  },
  setListHasError(flag) {
    state.listHasError = flag;
  },
  resetList() {
    state.list = [...state.tmpList];
    state.isPokemonSearch = false;
    state.listHasError = false;
    state.searchHasError = false;
  }
}
