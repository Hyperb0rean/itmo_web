import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:1337/api/admin/';

class AdminService{
    getAll() {
        return axios.get(API_URL,{ headers: authHeader() });
    }

    deleteUser(userId) {
        return axios.delete(API_URL  + userId, { headers: authHeader() });
    }


}
export default new AdminService();