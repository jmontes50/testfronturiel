import React, { useState, createContext } from 'react';
import { useHistory } from 'react-router-dom';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const history = useHistory();
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    const setAuthToken = (token, user) => {
        setUser(user);
        setToken(token);
        return history.push('/');
    }

    const removeToken = (token) => {
        localStorage.removeItem('token');
        setToken(null);
        return history.push('/');
    }

    return (
        <AuthContext.Provider value={{user, token, setAuthToken, removeToken}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;

