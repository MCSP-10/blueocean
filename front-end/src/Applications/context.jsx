import { createContext, useEffect, useState } from 'react';
import Api from 'Shared/utils/Api';

const applicationsContext = createContext();

export const ApplicationsProvider = ({ children }) => {
    const [applications, setApplications] = useState([]);

    const getApplications = async () => {
        const apps = await Api.applications.getAll();
        setApplications(apps);
        console.log(apps);
    };

    useEffect(getApplications, []);

    const exports = { applications };
    return (
        <applicationsContext.Provider value={exports}>
            {children}
        </applicationsContext.Provider>
    );
};

export default applicationsContext;
