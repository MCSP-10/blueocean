import { ApplicationsBoard } from 'Applications';
import { ApplicationsProvider } from 'Applications';
const Applications = () => {
    return (
        <ApplicationsProvider>
            <ApplicationsBoard />
        </ApplicationsProvider>
    );
};
export default Applications;
