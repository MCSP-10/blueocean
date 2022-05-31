import { createContext, useEffect, useState } from 'react';
import Api from 'Shared/utils/Api';

const opportunitiesContext = createContext();

export const OpportunitiesProvider = ({ children }) => {
    const [opportunities, setOpportunities] = useState([]);

    const getOpps = async () => {
        const opps = await Api.opportunities.getAllByGroup('MCSP-10');
        setOpportunities(opps);
    };
    const createOpportunities = async (body) => {
        const newApp = await Api.opportunities.create(body);
        opportunities.push(newApp);
        setOpportunities([...opportunities]);
        console.log(opportunities)
    };
    const deleteOpportunities= async (id) => {
        const index = opportunities.findIndex((app) => app.id === id)
        opportunities.splice(index,1)
        await Api.opportunities.delete(id)
        setOpportunities([...opportunities]);
    };

    useEffect(getOpps, []);

    const exports = { opportunities, deleteOpportunities,createOpportunities};
    
    return (
        <opportunitiesContext.Provider value={exports}>
            {children}
        </opportunitiesContext.Provider>
    );
};

export default opportunitiesContext;
