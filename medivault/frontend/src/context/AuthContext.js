import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(false); // Initial state of authentication

    const login = () => setAuth(true); // Function to set auth state to true

    const logout = () => setAuth(false); // Function to set auth state to false (optional)

    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
