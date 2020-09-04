import { useState, useEffect } from 'react'
import axios from 'axios'

const useLogin = ({ email, password }) => {
    const [data, setData] = useState('');
    const [isAuth, setIsAuth] = useState(false)

  
        const config = {};
        const bodyParameters = {
            email,
            password
        };
        const fetch = () => {
            axios
                .post("http://api-tycoone.tk/api/users/login",
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

    console.log(data);
    // setToken(data.message.token);

    return { data, isAuth }
};

export default useLogin;