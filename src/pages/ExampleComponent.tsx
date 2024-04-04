import React from 'react';
import { useStore } from 'vuex'; // Import useStore from vuex
//import { authStore, AuthState } from '../store/auth'; // Import authStore directly
import { AuthStore } from '../store/types';

const ExampleComponent: React.FC = () => {
  const store = useStore<AuthStore>();
  const { user, token } = store.state as AuthStore; // Destructure store properties

  const handleLogin = () => {
    store.dispatch('auth/setToken', 'your_token_here');
    store.dispatch('auth/setUser', 'username');
  };

  const handleLogout = () => {
    store.dispatch('auth/clearUser');
  };

  return (
    <div>
      <p>User: {user}</p>
      <p>Token: {token}</p>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default ExampleComponent;

