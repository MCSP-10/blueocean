import OppBoard from './OppBoard';
import {OpportunitiesProvider} from 'Shared/contexts/opportunitiesContext';
const Opportunities = () => {
    return (
        <OpportunitiesProvider contextSharing={true}>
            <OppBoard  />
        </OpportunitiesProvider>
    );
};
export default Opportunities;
