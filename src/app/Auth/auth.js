class Auth {
    constructor() {
        this.isauthenticated = false;
    }

    login(cb) {
        this.isauthenticated = true;
        cb();
    }

    logout(cb) {
        this.isauthenticated = false;
        cb();
    }

    isauthenticated() {
        return this.isauthenticated;
    }
}

export default new Auth();