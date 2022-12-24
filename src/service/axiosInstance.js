import axios from "axios";
 const escapedToken = JSON.parse(localStorage.getItem("persist:root"))?.token;
const token = escapedToken && JSON.parse(escapedToken)


export const axiosWithToken = axios.create({
    baseURL: "https://11265.fullstack.clarusway.com/",
    ///headers: {Authorization: `Token ${token}`}
});



axiosWithToken.interceptors.request.use(
    function (config) {
        if (!config.headers["Authorization"]) {
            config.headers["Authorization"]=`Token ${token}`
            
        }
    return config;
  },
  function (error) {
    // TODO: Request error
    return Promise.reject(error);
  }
);
