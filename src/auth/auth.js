// import { useLogin } from '../hooks/useLogin'

class Auth {
    constructor() {
        this.isAuthenticated = localStorage.getItem('TYCOONES_isAuthenticated');

    }

    login(cb) {
        this.isAuthenticated = true;

        localStorage.setItem('TYCOONES_isAuthenticated', true)
        cb();
    }

    logout(cb) {
        this.isAuthenticated = false;
        localStorage.removeItem('TYCOONES_isAuthenticated');
        cb();
    }

    isAuthenticated() {
        return this.isAuthenticated;
    }
}

export default new Auth();