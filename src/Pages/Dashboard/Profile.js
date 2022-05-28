import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Profile = () => {

    const [user] = useAuthState(auth);
    console.log(user);
    return (
        <div>
            <div className="card mx-auto w-full lg:w-1/2 bg-base-100 shadow-xl">
                <div className="card-body">

                    <div className="form-control">
                        <label className="input-group  input-group-md">
                            <span className='bg-primary w-36 text-white'>Name</span>
                            <input type="text" value={user.displayName} disabled className="input input-bordered w-full input-md" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group  input-group-md">
                            <span className='bg-primary w-36 text-white'>Email</span>
                            <input type="text" value={user.email} disabled className="w-full input input-bordered input-md" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group  input-group-md">
                            <span className='bg-primary w-36 text-white'>Phone</span>
                            <input type="text" value='' disabled className="w-full input input-bordered input-md" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group  input-group-md">
                            <span className='bg-primary w-36 text-white'>Address</span>
                            <input type="text" value='' disabled className="w-full input input-bordered input-md" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group  input-group-md">
                            <span className='bg-primary w-36 text-white'>LinkedIn URL</span>
                            <input type="text" value=' ' disabled className="w-full input input-bordered input-md" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group  input-group-md">
                            <span className='bg-primary w-36 text-white'>Facebook</span>
                            <input type="text" value=' ' disabled className="w-full input input-bordered input-md" />
                        </label>
                    </div>

                    <label for="my-modal" className="btn btn-block modal-button">Update Information</label>

                </div>


                {/* MODAL START */}
                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle lg:z-40">
                    <div className="modal-box relative">
                        <label for="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <form className='grid grid-cols-1 gap-3 justify-items-center mt-2'>

                            {/* 1 */}
                            <div className="form-control">
                                <label className="input-group  input-group-md">
                                    <span className='bg-primary w-36 text-white'>Phone:</span>
                                    <input type="text" value=''  className="w-full input input-bordered input-md" />
                                </label>
                            </div>
                            {/*2 */}
                            <div className="form-control">
                                <label className="input-group  input-group-md">
                                    <span className='bg-primary w-36 text-white'>Address:</span>
                                    <input type="text" value=''  className="w-full input input-bordered input-md" />
                                </label>
                            </div>
                            {/* 3 */}
                            <div className="form-control">
                                <label className="input-group  input-group-md">
                                    <span className='bg-primary w-36 text-white'>Facebook:</span>
                                    <input type="text" value=''  className="w-full input input-bordered input-md" />
                                </label>
                            </div>
                            {/* 4 */}
                            <div className="form-control">
                                <label className="input-group  input-group-md">
                                    <span className='bg-primary w-36 text-white'>Linkedin:</span>
                                    <input type="text" value=''  className="w-full input input-bordered input-md" />
                                </label>
                            </div>
                            <input type="submit" value="Update" className="btn btn-secondary" />
                        </form>
                    </div>
                </div>
                {/* MODAL END */}
            </div>
        </div>
    );
};

export default Profile;