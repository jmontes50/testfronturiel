import React,{useState, useEffect} from 'react'
import '../components/css/profile.css';
import EditProfile from '../components/EditProfile';
import UserSummary from '../components/UserSummary';
import ProfileExtended from '../components/ProfileExtended'
import axios from 'axios';

const Profile = () => {

    const [profileActive, setProfileActive] = useState(true);
    const apiUrl = "https://travel-backend-jub.herokuapp.com/v1/"
    const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMmUyZDNiNmFhYTk5MmM5NDA0M2Q0MiIsImVtYWlsIjoiYWxkb0BnbWFpbC5jb20iLCJpYXQiOjE1OTcyOTMwNDYsImV4cCI6MTU5Nzg5Nzg0Nn0.PhTPM0jY-5_5fmyiBcpYaLage21-o3a1qeOANoGBzRI";

    const editUser = (change) => {
        setProfileActive(change);
    }

    const getUserFromDB = async () => {
        try {
            const { data } = await axios.get(apiUrl + "users/5f2e2d3b6aaa992c94043d42", {
                headers: {
                    Authorization: token
                },
            });
            console.log(data);
            console.log(data.user);
            return data.user;
        } catch (error) {
            return error;
        }
    }

    useEffect(() => {
        getUserFromDB();
    }, [])

    return (
        <div className="container">
            <div className="row m-5">
            <UserSummary editUser={editUser}></UserSummary>
            {profileActive ? 
            <ProfileExtended ></ProfileExtended> :
            <EditProfile editUser={editUser}></EditProfile>}
            </div>
        </div>

    )
}

export default Profile
