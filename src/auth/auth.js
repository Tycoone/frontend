// import { useLogin } from '../hooks/useLogin'
import localStore from '../hooks/useStorage'
class Auth {
    constructor() {
        this.isAuthenticated = localStore.getAuth()
    }

    login(cb) {
        this.isAuthenticated = true;
        localStore.setAuth(true)
        cb();
    }

    logout(cb) {
        this.isAuthenticated = false;
        localStore.removeToken();
        cb();
    }

    isAuthenticated() {
        return this.isAuthenticated;
    }
}

export default new Auth();