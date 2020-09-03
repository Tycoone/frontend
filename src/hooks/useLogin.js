import { useState, useEffect } from 'react'
import axios from 'axios'

const useLogin = ({ email, password }) => {
    const [data, setData] = useState();
    const [isAuth, setIsAuth] = useState(false)
    const [token, setToken] = useState('')

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

    console.log(data);
    setToken(data.message.token);
    
    return { data, isAuth, token }
};

export default useLogin;