import { getToken } from 'Shared/utils/token';

const Api = {};
const API_URL = 'http://localhost:3001';

const request = (method, endpoint, body) => {
    const token = getToken();
    const opts = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    };
    if (body) opts.body = JSON.stringify(body);
    return fetch(API_URL + endpoint, opts).then((response) => response.json());
};
Api.users = {
    get: () => request('GET', '/users'),
};

Api.opportunities = {
    getAllByGroup: (group) => request('GET', '/opportunities/' + group),
};

Api.applications = {
    getAll: () => request('GET', '/applications'),
    setStatus: (id, status) =>
        request('PATCH', '/applications/' + id, { status }),
};

Api.auth = {
    post: (body) => request('POST', '/users/'),
};

export default Api;
