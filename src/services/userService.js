import axios from 'axios';

const base_url = 'https://travel-backend-jub.herokuapp.com/v1';

let loginUser = async (user, props) => {
    console.log("recibido",user)
    try {
        const {data} = await axios.post(`${base_url}/users/login`, user);
        console.log("logiUser -> ", data);
        console.log("user" + data.user);
        console.log("token" + data.token);
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        return data;
    } catch (error) {
        console.error(error)
        return error;
    }
}

let registerUser = async (user, props) => {
    console.log("recibido",user)
    try {
        const {data} = await axios.post(`${base_url}/users/`, user);
        console.log("register -> ", data);
        console.log("user" + data.user);

        return data;
    } catch (error) {
        console.error(error)
        return error;
    }
}

export {loginUser, registerUser};