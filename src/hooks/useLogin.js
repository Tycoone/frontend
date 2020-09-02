import { useState, useEffect } from 'react'
import axios from 'axios'

const useLogin = ({ email, password }) => {
    const [token, setData] = useState();
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        const config = {};
        const bodyParameters = {
            email,
            password
        };
        const fetch = () => {
            axios
                .get("http://api-tycoone.tk/api/user/login",
                    bodyParameters,
                    config
                )
                .then(res => {
                    setData(res)
                    setIsAuth(true)
                })
                .catch(err => console.error(err));
        }
        fetch();

    }, [email, password]);

    console.log(token);

    return { token, isAuth }
};

export default useLogin;