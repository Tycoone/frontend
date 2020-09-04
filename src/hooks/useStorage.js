
class Storage {
    constructor() {
        this.token = localStorage.getItem('TYCOONES_USER_TOKEN');
    }
    async getNewToken(refreshToken) {
        var formdata = new FormData();
        var token;
        formdata.append("refreshToken", refreshToken);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };
        await fetch("http://api-tycoone.tk/api/token", requestOptions)
            .then(response => response.text())
            .then(result => token = result)
            .catch(error => console.log('error', error));

        this.setToken(token);
    }
    removeToken(){
        localStorage.removeItem('TYCOONES_USER_TOKEN');
    }
    getToken(){
        return this.token;
    }
    setToken(token){
        localStorage.setItem('TYCOONES_USER_TOKEN',token);
    }
// Auth
    getAuth(){
        return localStorage.getItem('TYCOONES_isAuthenticated');
    }
    setAuth(value){
        localStorage.setItem('TYCOONES_isAuthenticated', value)
    }
    removeAuth(){
        localStorage.removeItem('TYCOONES_isAuthenticated');
    }

}
export default new Storage();