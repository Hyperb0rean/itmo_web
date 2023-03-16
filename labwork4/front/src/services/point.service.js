import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:1337/api/points/';

class PointService{
    getAll() {
        return axios.get(API_URL + '',{ headers: authHeader() });
    }

    savePoint(data) {
        return axios.post(API_URL, data, { headers: authHeader() });
    }

    deleteAll() {
        return axios.delete(API_URL, {headers: authHeader()});
    }
}
export default new PointService();