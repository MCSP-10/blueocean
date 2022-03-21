import Api from 'Shared/utils/Api';
import { useQuery } from 'react-query';
const useApplications = () => {
    return useQuery('applications', Api.applications.getAll);
};

export default useApplications;
