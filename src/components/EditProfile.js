import React from 'react'

const EditProfile = (props) => {
    const {editUser} = props;

    const onSubmit = () => {
        editUser(true);
    }
    return (
        <div className="col-lg-8">
            <div className="card z-depth-3">
                <div className="card-body">
                    <div className="tab-content p-3">
                        <div className="form-group row">
                            <label className="col-lg-3 col-form-label form-control-label">First name</label>
                            <div className="col-lg-9">
                                <input className="form-control" type="text" value="Mark" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-lg-3 col-form-label form-control-label">Last name</label>
                            <div className="col-lg-9">
                                <input className="form-control" type="text" value="Jhonsan" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-lg-3 col-form-label form-control-label">Email</label>
                            <div className="col-lg-9">
                                <input className="form-control" type="email" value="mark@example.com" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-lg-3 col-form-label form-control-label">Password</label>
                            <div className="col-lg-9">
                                <input className="form-control" type="password" value="11111122333" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-lg-3 col-form-label form-control-label">Confirm password</label>
                            <div className="col-lg-9">
                                <input className="form-control" type="password" value="11111122333" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-lg-3 col-form-label form-control-label">Occupation</label>
                            <div className="col-lg-9">
                                <input className="form-control" type="text" value="What do you do" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-lg-3 col-form-label form-control-label">Detail</label>
                            <div className="col-lg-9">
                                <textarea className="form-control" type="text" value="About you.." />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-lg-3 col-form-label form-control-label">Hobbies</label>
                            <div className="col-lg-9">
                                <textarea className="form-control" type="text" value="Activities you love <3" />
                            </div>
                        </div>


                        <div className="form-group row">
                            <label className="col-lg-3 col-form-label form-control-label">Change profile</label>
                            <div className="col-lg-9">
                                <input className="form-control" type="file" />
                            </div>
                        </div>
                        <div className="form-group row center">
                                <button onClick={() => onSubmit()} type="reset" className="btn btn-secondary">Cancel</button>
                                <button type="button" className="btn btn-primary ml-4">Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfile
