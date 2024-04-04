import React, { useState } from 'react';
import { registerUser } from '../services/api';

const SignUpPage = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState<string | null>(null);
  const handleSignUp = async (userData: { email: string, password: string }) => {
    try {
      await registerUser(userData);
      // Redirect to SignIn or Dashboard
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div>
    <h1>Sign Up</h1>
    {error && <div>Error: {error}</div>}
    <form onSubmit={handleSignUp}>
      <div>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <button type="submit">Sign Up</button>
    </form>
  </div>
  );
};

export default SignUpPage;
