import React from 'react';
import { RouteProps, Navigate } from 'react-router-dom';
import { useStore } from 'vuex';
import { State } from '../store'; // Import your store state type

interface ProtectedRouteProps  {
  path?: string;
  element: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const store = useStore<State>();

  if (!store.state.isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }

  return <>{element}</>;
};

export default ProtectedRoute;
