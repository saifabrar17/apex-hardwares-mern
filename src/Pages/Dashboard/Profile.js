import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Profile = () => {

    const [user] = useAuthState(auth);
console.log(user);
    return (
        <div>
            <div class="card mx-auto w-1/2 bg-base-100 shadow-xl">
                <div class="card-body">
                    <div class="form-control w-full">
                        <label class="label">
                            <span class="label-text font-bold">Full Name</span>
                        </label>
                        <input type="text" value={user.displayName} disabled class="input input-bordered max-width" />
                    </div>

                    
                    <div class="form-control w-full">
                        <label class="label">
                            <span class="label-text font-bold">Email</span>
                        </label>
                        <input type="text" value={user.email} disabled class="input input-bordered max-width" />
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Profile;