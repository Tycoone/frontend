import { useState, useEffect } from 'react'
import axios from 'axios'

const useAPI = (token) => {
    const [data, setData] = useState();

    useEffect(() => {
        const fetch = () => {
            // const config = {
            //     headers: { Authorization: `Bearer ${token}`, "Access-Control-Allow-Origin": "*" }
            // };
            var config = {
                method: 'get',
                url: 'http://api-tycoone.tk/api/posts/',
                headers: { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcGktdHljb29uZS50a1wvIiwiYXVkIjoiVEhFX0FVRElFTkNFIiwiaWF0IjoxNTk4NTk3MDkxLCJuYmYiOjE1OTg1OTcxMDEsImV4cCI6MTU5ODYwMzA5MSwiZGF0YSI6eyJpZCI6IjEiLCJmaXJzdG5hbWUiOiJEYW5pZWwiLCJsYXN0bmFtZSI6ImJhcmNhIiwiZW1haWwiOiJtYWJhZGVqZWRhMUBnbWFpbC5jb20iLCJwcm9maWxlX3BpY3R1cmUiOiIifX0.ULCUVeC0uX8sVfF3Ckk0bQ7LoTwwP8HzYl8KiIAa-3Q`, "Access-Control-Allow-Origin": "*" }
              };
              
              axios(config)
              .then(function (response) {
                console.log(JSON.stringify(response.data));
              })
              .catch(function (error) {
                console.log(error);
              });
            // const bodyParameters = {};
            // const URL = "http://api-tycoone.tk/api/profile"
            // try {
            //     var result = await axios({
            //         method: 'post',
            //         url: URL,
            //          bodyParameters, 
            //          config
            //          });
            // } catch (error) {
            //     console.error(error)
            // }
            // setData(result);
        }
        fetch()
    }, [token]);

    console.log(data);

};


/* 
() => {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        const bodyParameters = {};
        const fetch = () => {
            axios
                .get("http://api-tycoone.tk/posts/",
                    bodyParameters,
                    config
                )
                .then(res => setData(res))
                .catch(err => console.error(err));
        }
        fetch();
    } */
export default useAPI;