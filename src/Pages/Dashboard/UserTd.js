import React from 'react';
import { toast } from 'react-toastify';

const UserTd = ({ user, index, refetch }) => {

    const { email, role } = user;
    const url = `http://localhost:5000/userx/admin/${email}`;
    const makeAdmin = () => {
        console.log('inside ', url);
        fetch(url, { 
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            if(res.status === 403){
                toast.error('Failed to Make an admin');
            }
            return res.json()})
        .then(data => {
            if (data.modifiedCount > 0) {
                refetch();
                toast.success(`Successfully made an admin`);
            }

        })
            
    }
    // 
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
            <td><button class="btn btn-error btn-xs">Remove</button></td>
        </tr>
    );
};

export default UserTd;