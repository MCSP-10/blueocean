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
import { useAuth, AuthProvider } from 'Shared/services/Auth';
import Login from 'Login';
import { QueryClient, QueryClientProvider } from 'react-query';
import './main.css';

const queryClient = new QueryClient();

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
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <Router>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route element={<RequireAuth />}>
                            <Route path="/*" element={<App />} />
                        </Route>
                    </Routes>
                </Router>
            </AuthProvider>
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
