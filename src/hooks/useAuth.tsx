import React, { ReactNode, useState, createContext, useContext } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components/native';

import { light } from '@styles/themes';

interface AuthContextData {
    theme: DefaultTheme;
    handleTheme: (newTheme: DefaultTheme) => void;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {

    const [theme, setTheme] = useState<DefaultTheme>(light);

    function handleTheme(newTheme: DefaultTheme) {
        setTheme(newTheme);
    }

    return(
        <AuthContext.Provider value={{
            theme,
            handleTheme
        }}>
            <ThemeProvider theme={theme}>
                { children }
            </ThemeProvider>
        </AuthContext.Provider>
    );
}

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };