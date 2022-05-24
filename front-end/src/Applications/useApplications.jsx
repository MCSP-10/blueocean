import Api from 'Shared/utils/Api';
import { useQuery } from 'react-query';
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient();

const useApplications = () => {
    return (
        <QueryClientProvider client={queryClient}>
            useQuery('applications', Api.applications.getAll);
        </QueryClientProvider>
    )
};

export default useApplications;
