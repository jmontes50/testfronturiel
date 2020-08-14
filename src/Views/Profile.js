import React,{useState, useEffect, useContext } from 'react'
import '../components/css/profile.css';
import EditProfile from '../components/EditProfile';
import UserSummary from '../components/UserSummary';
import ProfileExtended from '../components/ProfileExtended'
import axios from 'axios';
import {AuthContext} from '../context/AuthContext';

const Profile = () => {

    //const {user, token} = useContext(AuthContext);
    const [profileActive, setProfileActive] = useState(true);

    const editUser = (change) => {
        setProfileActive(change);
    }

    // const getUserFromDB = async () => {
    //     try {
    //         const { data } = await axios.get(apiUrl + "users/5f2e2d3b6aaa992c94043d42", {
    //             headers: {
    //                 Authorization: token
    //             },
    //         });
    //         console.log(data);
    //         console.log(data.user);
    //         return data.user;
    //     } catch (error) {
    //         return error;
    //     }
    // }

    useEffect(() => {
        //getUserFromDB();
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
