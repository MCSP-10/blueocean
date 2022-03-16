import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Views/Home/Home';
import Opportunities from './Views/Opportunities/Opportunities';
import Sidebar from './Components/Sidebar/Sidebar';
import Topbar from './Components/Topbar/Topbar';
import styles from './App.module.css';
import CreateUser from './Components/Login/CreateUser';
import Login from './Components/Login/Login';

export default function App() {
    return (
        <BrowserRouter>
            <div className={styles.container}>
                <div className={styles.sideBar}>
                    <Sidebar />
                </div>
                <div className={styles.topBar}>
                    <Topbar />
                </div>
                <div className={styles.viewArea}>
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route
                            path="/opportunities"
                            element={<Opportunities />}
                        ></Route>
                        <Route path="/createuser" element={<CreateUser />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}
