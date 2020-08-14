import React from 'react';
import { NavLink } from 'react-router-dom';

const UserSummary = (props) => {
    const { editUser } = props;

    const onSubmit = () => {
        editUser(false);
    }
    return (
        <div className="col-lg-4">
            <div className="profile-card-4 z-depth-3">
                <div className="card">
                    <div className="card-body text-center bg-success rounded-top">
                        <div className="user-box">
                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="user avatar" />
                        </div>
                        <h5 className="mb-1 text-white">Jhon Doe</h5>
                        <h6 className="text-light">UI/UX Engineer</h6>
                    </div>
                    <div className="card-body">
                        <ul className="list-group shadow-none">
                            <li className="list-group-item">
                                <div className="list-icon">
                                    <i className="fa fa-phone-square"></i>
                                </div>
                                <div className="list-details">
                                    <span>Mexico</span>
                                    <small>Country</small>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="list-icon">
                                    <i className="fa fa-envelope"></i>
                                </div>
                                <div className="list-details">
                                    <span>javier@gmail.com</span>
                                    <small>Email Address</small>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="list-icon">
                                    <i className="fa fa-globe"></i>
                                </div>
                                <div className="list-details">
                                    <small>This is something about me...</small>
                                </div>
                            </li>
                        </ul>
                        <div className="row text-center mt-4">
                            <div className="col p-2">
                                <h4 className="mb-1 line-height-5">2.2k</h4>
                                <small className="mb-0 font-weight-bold">Searches</small>
                            </div>
                            <div className="col p-2">
                                <h4 className="mb-1 line-height-5">10</h4>
                                <small className="mb-0 font-weight-bold">Venues Saved</small>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer text-center">
                        <button onClick={() => onSubmit()} className="btn btn-primary btn-block">Edit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserSummary
