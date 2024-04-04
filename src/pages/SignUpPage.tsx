import { registerUser } from '../services/api';

const SignUpPage = () => {
  const handleSignUp = async (userData: { email: string, password: string }) => {
    try {
      await registerUser(userData);
      // Redirect to SignIn or Dashboard
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {/* SignUp Form */}
      jhjhjhjh
    </div>
  );
};

export default SignUpPage;
