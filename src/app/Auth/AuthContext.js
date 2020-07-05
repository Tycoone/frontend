import React, { createContext, useState } from 'react';
export const AuthContext = createContext();

export const AuthProvider = props => {
    const [login, setLogin] = useState(
        {
            email: '',
            password: '',
            isAuthenticated:false
        }
    );
    return (
        <AuthContext.Provider value={[login, setLogin]}>
            {props.children}
        </AuthContext.Provider>
    );
}