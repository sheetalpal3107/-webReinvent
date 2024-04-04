import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import Dashboard from './pages/DashboardPage'
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
   
        <Routes>
          <Route path="/login">
            <SignInPage />
          </Route>
          <Route path="/register">
            <SignUpPage />
          </Route>
          <Route path="/" element={<ProtectedRoute element={<Dashboard/>}/>}/>
          
        </Routes>

    </Router>
  );
}

export default App;
