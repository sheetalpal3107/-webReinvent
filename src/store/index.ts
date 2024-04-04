import { createStore, GetterTree } from 'vuex';

export interface State {
  isAuthenticated: boolean;
  token: string | null;
  // You can add more properties here as needed
}
const getters: GetterTree<State, State> = {
  isAuthenticated: (state) => state.isAuthenticated,
  // define other getters if needed
};
export default createStore<State>({
  state: {
    isAuthenticated: false,
    token: null,
    // Add other state properties related to authentication
  },
  mutations: {
    setToken(state, token: string | null) {
      state.token = token;
    },
    // Add more mutations as needed
  },
  actions: {
    login({ commit }, token: string) {
      commit('setToken', token);
      // You can perform additional actions like fetching user data here
    },
    logout({ commit }) {
      commit('setToken', null);
      // Additional logout actions if needed
    },
    // Add more actions as needed
  },
  getters: {
    isAuthenticated(state) {
      return !!state.token;
    },
    // You can add more getters as needed
  },
});
