import React, { createContext, useState } from 'react';
export const ModeContext = createContext();

export const ModeProvider = props => {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <ModeContext.Provider value={[darkMode, setDarkMode]}>
            {props.children}
        </ModeContext.Provider>
    );
}