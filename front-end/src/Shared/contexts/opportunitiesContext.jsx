import { createContext, useEffect, useState } from 'react';
import Api from 'Shared/utils/Api';

const opportunitiesContext = createContext();

export const OpportunitiesProvider = ({ children }) => {
    const [opportunities, setOpportunities] = useState([]);

    const getOpps = async () => {
        const opps = await Api.opportunities.getAllByGroup('MCSP-10');
        setOpportunities(opps);
    };

    useEffect(getOpps, []);

    const exports = { opportunities };
    return (
        <opportunitiesContext.Provider value={exports}>
            {children}
        </opportunitiesContext.Provider>
    );
};

export default opportunitiesContext;
