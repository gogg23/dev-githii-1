import React, {createContext, useContext, useEffect, useState} from 'react';
import { Children } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext (ThemeContext);

export const ThemeProvider = ({children}) => (
    const [theme, seTheme] = useState (
        () => localStorage.getItem('theme') || 'light'
    );
);