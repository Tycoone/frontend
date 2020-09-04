
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

        return token;
    }
    updateToken = () => {
        // this.token;
    }

}
export default new Storage();