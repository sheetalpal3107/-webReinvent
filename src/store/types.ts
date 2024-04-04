import { Commit } from 'vuex';
import { AuthState } from './auth';

export interface AuthActions {
  setUser: (context: { commit: Commit }, user: string | null) => void;
  setToken: (context: { commit: Commit }, token: string | null) => void;
  clearUser: (context: { commit: Commit }) => void;
}

export interface AuthStore extends AuthState, AuthActions {}
