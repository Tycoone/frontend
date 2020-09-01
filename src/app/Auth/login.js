import { useState, useEffect } from 'react'
import axios from 'axios'

const Login = ({ email, password }) => {
    const [data, setData] = useState('');
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetch = async () => {
            const config = {

            };
            const bodyParameters = {
                email,
                password
            };
            try {
                var result = await axios.post("http://api-tycoone.tk/api/users/login", bodyParameters, config);
            } catch (error) {
                setError(error)
            }
            setData(result);
        }
        fetch()
    }, [email, password]);

    console.log(data);
    
    sessionStorage.setItem('__token', data.message.token);

    return { data, error }

};
export default Login;