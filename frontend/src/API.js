import axios from 'axios';
const LOGIN_USER_KEY = 'WD_FORUM_LOGIN_USER_KEY';

var baseURL;
baseURL = 'http://127.0.0.1:8000/';

const api = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
});

/**
 * Add requireToken: true in request config, for API that required Authorization token
 */
// api.interceptors.request.use(
//     config => {
//         if (config.requireToken && localStorage.getItem(LOGIN_USER_KEY)) {
//             config.headers.common['Authorization'] = JSON.parse(localStorage.getItem(LOGIN_USER_KEY)).token;
//         }

//         return config;
//     },
//     err => {
//         console.error(err);
//     }
// );

export default class API {
    getMovies = async params => {
        let url = '/movies/';
        let query = new URLSearchParams();
        for (const key in params) {
            if (params[key] != null) {
                query.append(key, params[key]);
            }
        }

        if (query.toString() != '') {
            url += '?' + query.toString();
        }
        const places = await api
            .get(url)
            .then(response => {
                console.log(response.data);
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
        return places;
    };
}

