import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Profile = () => {

    const [user] = useAuthState(auth);
    console.log(user);
    return (
        <div>
            <div class="card mx-auto w-full lg:w-1/2 bg-base-100 shadow-xl">
                <div class="card-body">

                    <div class="form-control">
                        <label class="input-group  input-group-md">
                            <span className='bg-primary w-36 text-white'>Name</span>
                            <input type="text" value={user.displayName} disabled class="input input-bordered w-full input-md" />
                        </label>
                    </div>
                    <div class="form-control">
                        <label class="input-group  input-group-md">
                            <span className='bg-primary w-36 text-white'>Email</span>
                            <input type="text" value={user.email} disabled class="w-full input input-bordered input-md" />
                        </label>
                    </div>
                    <div class="form-control">
                        <label class="input-group  input-group-md">
                            <span className='bg-primary w-36 text-white'>Phone</span>
                            <input type="text" value='dynamic number here' disabled class="w-full input input-bordered input-md" />
                        </label>
                    </div>
                    <div class="form-control">
                        <label class="input-group  input-group-md">
                            <span className='bg-primary w-36 text-white'>Address</span>
                            <input type="text" value='dynamic address here' disabled class="w-full input input-bordered input-md" />
                        </label>
                    </div>
                    <div class="form-control">
                        <label class="input-group  input-group-md">
                            <span className='bg-primary w-36 text-white'>LinkedIn URL</span>
                            <input type="text" value='dynamic linkedin here' disabled class="w-full input input-bordered input-md" />
                        </label>
                    </div>
                    <div class="form-control">
                        <label class="input-group  input-group-md">
                            <span className='bg-primary w-36 text-white'>Facebook</span>
                            <input type="text" value='dynamic linkedin here' disabled class="w-full input input-bordered input-md" />
                        </label>
                    </div>

                    <label for="my-modal" class="btn btn-block modal-button">Update Information</label>

                </div>


                {/* MODAL START */}
                <input type="checkbox" id="my-modal" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                    <div class="modal-box relative">
                        <label for="my-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <form className='grid grid-cols-1 gap-3 justify-items-center mt-2'>

                            {/* 1 */}
                            <div class="form-control">
                                <label class="input-group  input-group-md">
                                    <span className='bg-primary w-36 text-white'>Facebook</span>
                                    <input type="text" value='dynamic linkedin here'  class="w-full input input-bordered input-md" />
                                </label>
                            </div>
                            {/*2 */}
                            <div class="form-control">
                                <label class="input-group  input-group-md">
                                    <span className='bg-primary w-36 text-white'>Facebook</span>
                                    <input type="text" value='dynamic linkedin here'  class="w-full input input-bordered input-md" />
                                </label>
                            </div>
                            {/* 3 */}
                            <div class="form-control">
                                <label class="input-group  input-group-md">
                                    <span className='bg-primary w-36 text-white'>Facebook</span>
                                    <input type="text" value='dynamic linkedin here'  class="w-full input input-bordered input-md" />
                                </label>
                            </div>
                            {/* 4 */}
                            <div class="form-control">
                                <label class="input-group  input-group-md">
                                    <span className='bg-primary w-36 text-white'>Facebook</span>
                                    <input type="text" value='dynamic linkedin here'  class="w-full input input-bordered input-md" />
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