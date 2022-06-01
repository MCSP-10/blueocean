import { Routes, Route, Outlet } from 'react-router-dom';
import Applications from 'Applications';
import Opportunities from 'Opportunities';
import Sidebar from 'Shared/components/Sidebar/Sidebar';
import Topbar from 'Shared/components/Topbar/Topbar';
import { useAuth } from 'Shared/services/Auth.js';
import { OpportunitiesProvider } from 'Shared/contexts/opportunitiesContext';
import Quote from './Shared/components/Topbar/quoteBar';

import styles from './App.module.css';

export const App = () => {
    return (
        <div className={styles.container}>
            {/* <div className={styles.sideBar}>
                <Sidebar />
            </div> */}
            <div className={styles.topBar}>
                <Topbar />
            </div>
            {/* <div className={styles.quote}>
                <Quote/>
            </div> */}
            <div className={styles.viewArea}>
                <OpportunitiesProvider>
                    <Routes>
                        <Route path="applications" element={<Applications />} />
                        <Route
                            path="opportunities"
                            element={<Opportunities />}
                        />
                    </Routes>
                </OpportunitiesProvider>
            </div>
        </div>
    );
};

export default App;
