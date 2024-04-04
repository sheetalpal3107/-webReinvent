import { ActionContext, CommitOptions } from 'vuex';
import { State } from './index'; // Import State type from store/index.ts

export interface AuthState {
  user: string | null;
  token: string | null;
}

 const authStore = {
  namespaced: true, // Optional but can be useful for organization
  state: (): AuthState => ({
    user: null,
    token: null,
  }),
  mutations: {
    setUser(state: AuthState, user: string | null) {
      state.user = user;
    },
    setToken(state: AuthState, token: string | null) {
      state.token = token;
    },
    clearUser(state: AuthState) {
      state.user = null;
      state.token = null;
    },
  },
  actions: {
    setUser(context: ActionContext<AuthState, State>, user: string | null) {
      context.commit('setUser', user);
    },
    setToken(context: ActionContext<AuthState, State>, token: string | null) {
      context.commit('setToken', token);
    },
    clearUser(context: ActionContext<AuthState, State>) {
      context.commit('clearUser');
    },
  },
};

export default authStore;
