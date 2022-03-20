import AppsBoard from './Board';
import { ApplicationsProvider } from 'Applications/context';
const Applications = () => {
    return (
        <ApplicationsProvider>
            <AppsBoard />
        </ApplicationsProvider>
    );
};
export default Applications;
