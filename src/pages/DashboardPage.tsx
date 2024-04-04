import { useEffect, useState } from 'react';
import { getUserData } from '../services/api';
import { useStore } from 'vuex';

const DashboardPage = () => {
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const store = useStore();
  const userId = store.state.userId;

  useEffect(() => {
    if (userId) {
      fetchData(userId);
    }
  }, [userId]);

  const fetchData = async (userId: number) => {
    try {
      const userData = await getUserData(userId);
      // Use userData
    } catch (error) {
      console.error(error);
    }
  };
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!userData) {
    return <div>No user data found.</div>;
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <h2>User Information</h2>
        <p><strong>Name:</strong> {userData.name}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        {/* Add more properties as needed */}
      </div>
    </div>
  );
};

export default DashboardPage;
