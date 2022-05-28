import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import UserTd from './UserTd';

const AllUsers = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    
    return (
        <div>
        <h2 className='text-xl font-bold text-primary py-2'>Total Users: {users.length}</h2>
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                        <th>Action</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <UserTd
                        key={user._id}
                        user={user}
                        index={index}
                        refetch={refetch}
                        ></UserTd>)
                    }
                </tbody>
            </table>
        </div>

    </div>
    );
};

export default AllUsers;