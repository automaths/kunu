import AsyncStorage from '@react-native-async-storage/async-storage';

import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext({
    token: '',
    isAuthenticated: false,
    authenticate: (token:any) => {},
    logout: () => {},
});

function AuthContextProvider(props: { children:any }) {
    const [authToken, setAuthToken] = useState();

    function authenticate(token:any) {
        setAuthToken(token);
        AsyncStorage.setItem('token', token);
    }

    function logout() {
        setAuthToken(undefined);
        AsyncStorage.removeItem('token');
    }

    const value = {
        token: authToken,
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        logout: logout,
    };

    return (
        <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
    );
}

export default AuthContextProvider;
