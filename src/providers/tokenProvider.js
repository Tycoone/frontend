import React, { useState, createContext } from 'react'

const TokenContext = createContext();

const initialToken = {};

export const TokenProvider = ({children}) =>{
    const [token, setToken] = useState(initialToken);
    return (
        <TokenContext.Provider value={[token,setToken]}>
            {children}
        </TokenContext.Provider>
    )

}