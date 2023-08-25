import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import Loading from '../Shared/Loading/Loading';
import useEmployee from '../../Hooks/useEmployee';


const RequireEmployee = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [employee, employeeLoading] = useEmployee(user); // Use your custom hook to fetch employee role
    const location = useLocation();

    if (loading || employeeLoading) {
        return <Loading></Loading>;
    }

    if (!user || !employee) {
        signOut(auth);
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
    }
    return children;
};

export default RequireEmployee;
