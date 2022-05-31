import { ApplicationsBoard } from 'Applications';
import { ApplicationsProvider } from 'Applications';
const Applications = () => {
    return (
        <ApplicationsProvider contextSharing={true}>
            <ApplicationsBoard />
        </ApplicationsProvider>
    );
};
export default Applications;
