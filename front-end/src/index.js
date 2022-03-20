import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet,
    Navigate,
    useLocation,
} from 'react-router-dom';
import App from 'App';
import Login from 'Login';
import Auth, { useAuth, AuthProvider } from 'Shared/services/Auth';
import RegLogin from 'RegLogin';
import './main.css';

const RequireAuth = (props) => {
    const { location } = useLocation();
    const { isLoggedIn } = useAuth();
    return isLoggedIn ? (
        <Outlet />
    ) : (
        <Navigate to="/login" state={{ from: location }} replace />
    );
};
ReactDOM.render(
    <React.StrictMode>
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={<RegLogin />} />
                    <Route element={<RequireAuth />}>
                        <Route path="/*" element={<App />} />
                    </Route>
                </Routes>
            </Router>
        </AuthProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
