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
                    
                </div>
            </div>
        </div>
    );
};

export default Profile;