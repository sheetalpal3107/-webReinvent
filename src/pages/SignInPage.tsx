import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useStore } from 'vuex';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const store = useStore();
  
  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Perform authentication, get token from API, etc.
      const token = 'YOUR_AUTH_TOKEN_FROM_API';
      store.dispatch('login', token);
      // Redirect to dashboard or other authenticated route
    } catch (error) {
      setError('Login failed');
    }
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <form onSubmit={handleSignIn}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default SignInPage;
