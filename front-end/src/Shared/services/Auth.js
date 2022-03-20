import { createContext, useContext, useState, useEffect } from 'react';
import Api from 'Shared/utils/Api';

const authContext = createContext();

export const useAuth = () => {
    return useContext(authContext);
};

export const AuthProvider = ({ children }) => {
    const token = window.localStorage.getItem('token');
    const [isLoggedIn, setIsLoggedIn] = useState(!!token);
    const [user, setUser] = useState();

    const login = async (email, password) => {
        const response = await fetch('http://localhost:3001/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        if (response.status === 400) return false;

        const data = await response.json();
        window.localStorage.setItem('token', data.token);
        console.log(data);
        setIsLoggedIn(() => true);
        return true;
    };

    const logout = () => {
        window.localStorage.removeItem('token');
        setIsLoggedIn(false);
    };

    const getUser = async () => {
        const user = await Api.users.get();
        return user;
    };

    useEffect(async () => {
        if (token && !user) {
            const user = await getUser();
            setUser(user);
        }
    });

    const auth = { login, logout, user, isLoggedIn };

    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};
