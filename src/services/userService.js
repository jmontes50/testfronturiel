import axios from 'axios';

const base_url = 'https://travel-backend-jub.herokuapp.com/v1/';

let loginUser = async (user, props) => {
    console.log("recibido",user)
    try {
        const {data} = await axios.post(`${base_url}/users/login`, user);
        console.log("loginuser",data);
        return data;
    } catch (error) {
        console.error(error)
        return error;
    }
}

export {loginUser};