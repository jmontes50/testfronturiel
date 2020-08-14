import React from 'react';
import { NavLink } from 'react-router-dom';

const ProfileExtended = () => {
    return (
        <div className="col-lg-8">
            <div className="card z-depth-3">
                <div className="card-body">
                    <div className="tab-content p-3">
                        <div className="tab-pane active show" id="profile">
                            <h5 className="mb-3">User Profile</h5>
                            <div className="row">
                                <div className="col-md-6">
                                    <h6>About</h6>
                                    <p> Web Designer, UI/UX Engineer</p>
                                    <h6>Hobbies</h6>
                                    <p>Indie music, skiing and hiking. I love the great outdoors.</p>
                                </div>
                                <div className="col-md-6">
                                    <h6>Recent badges</h6>
                                    <NavLink to="/profile" className="badge badge-dark badge-pill">Forest</NavLink>
                                    <NavLink to="/profile" className="badge badge-dark badge-pill">Sea</NavLink>
                                    <NavLink to="/profile" className="badge badge-dark badge-pill">Art</NavLink>
                                    <hr />
                                    <span className="badge badge-primary"><i className="fa fa-user"></i> 900 Followers</span>
                                    <span className="badge badge-danger"><i className="fa fa-eye"></i> 245 Views</span>
                                </div>
                                <div className="col-md-12">
                                    <h5 className="mt-2 mb-3"><span className="fa fa-clock-o ion-clock float-right"></span> Recent Activity</h5>
                                    <table className="table table-hover table-striped">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <strong>Abby</strong> joined ACME Project Team in <strong>`Collaboration`</strong>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Gary</strong> deleted My Board1 in <strong>`Discussions`</strong>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileExtended
