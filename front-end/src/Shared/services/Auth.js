import { createContext, useContext, useState, useEffect } from 'react';
import Api from 'Shared/utils/Api';

const authContext = createContext();

export const useAuth = () => {
    return useContext(authContext);
};

export const AuthProvider = ({ children }) => {
    const initialToken = window.localStorage.getItem('token');
    const [isLoggedIn, setIsLoggedIn] = useState(!!initialToken);
    const [user, setUser] = useState();

    const login = async (email, password) => {
        const { token } = await Api.users.login(email, password);

        if (!token) return false;

        window.localStorage.setItem('token', token);
        setIsLoggedIn(() => true);
        return true;
    };
    const register = async (first, last, email, password, role) => {
        const {registered} = await Api.users.register(first, last, email, password, role);


    }

    const logout = () => {
        window.localStorage.removeItem('token');
        setIsLoggedIn(false);
    };

    const getUser = async () => {
        const user = await Api.users.get();
        return user;
    };

    useEffect(async () => {
        if (initialToken && !user) {
            const user = await getUser();
            setUser(user);
        }
    });

    const auth = {register, login, logout, user, isLoggedIn };

    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};
