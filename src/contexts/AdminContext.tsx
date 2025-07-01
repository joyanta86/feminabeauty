
import React, { createContext, useContext, useState, useEffect } from 'react';

interface AdminContextType {
  isAdminLoggedIn: boolean;
  adminLogin: (password: string) => boolean;
  adminLogout: () => void;
  setAdminPassword: (password: string) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [adminPassword, setAdminPasswordState] = useState('admin123');

  useEffect(() => {
    // Check if admin is already logged in (persist session)
    const savedLoginState = localStorage.getItem('adminLoggedIn');
    if (savedLoginState === 'true') {
      setIsAdminLoggedIn(true);
    }

    // Load saved admin password
    const savedPassword = localStorage.getItem('adminPassword');
    if (savedPassword) {
      setAdminPasswordState(savedPassword);
    }
  }, []);

  const adminLogin = (password: string): boolean => {
    if (password === adminPassword) {
      setIsAdminLoggedIn(true);
      localStorage.setItem('adminLoggedIn', 'true');
      return true;
    }
    return false;
  };

  const adminLogout = () => {
    setIsAdminLoggedIn(false);
    localStorage.removeItem('adminLoggedIn');
  };

  const setAdminPassword = (password: string) => {
    setAdminPasswordState(password);
    localStorage.setItem('adminPassword', password);
  };

  return (
    <AdminContext.Provider value={{
      isAdminLoggedIn,
      adminLogin,
      adminLogout,
      setAdminPassword
    }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};
