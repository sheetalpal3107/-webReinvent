import { useEffect } from 'react';
import { getUserData } from '../services/api';
import { useStore } from 'vuex';

const DashboardPage = () => {
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

  return (
    <div>
      {/* Dashboard Content */}
      hhhhhhh
    </div>
  );
};

export default DashboardPage;
