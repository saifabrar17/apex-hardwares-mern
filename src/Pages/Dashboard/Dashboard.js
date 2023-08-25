import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';
import useEmployee from '../../Hooks/useEmployee';

const Dashboard = () => {

    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const [employee] = useEmployee(user);


    return (
        <div>
            <div className="drawer p-4 drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <h2 className='text-2xl  font-bold text-center text-primary'>Dashboard</h2>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        {/* <li><Link to="/dashboard">My Profile</Link></li> */}
                        {!admin && <li><Link to="/dashboard/orders">My Orders</Link></li>}
                        {!admin && <li><Link to="/dashboard/review">Add Review</Link></li>}
                        {admin && <li><Link to="/dashboard/addNewProduct">Add Product</Link></li>}
                        {admin && <li><Link to="/dashboard/updateStock">Update Stock</Link></li>}
                        {admin && <li><Link to="/dashboard/allPaidOrders">All Paid Orders</Link></li>}
                        {admin && <li><Link to="/dashboard/manageAllProduct">All Products</Link></li>}
                        {admin && <li><Link to="/dashboard/stockOverview">Overview</Link></li>}
                        {admin && <li><Link to="/dashboard/allUsers">All Users</Link></li>}
                        {employee && <li><Link to="/dashboard/customOrder">Create Order</Link></li>}
                        {admin && <li><Link to="/dashboard/allCustomOrders">Custom Orders</Link></li>}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;