import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import 'react-toastify/dist/ReactToastify.css';
import AddNewProduct from './Pages/Dashboard/AddNewProduct';
import AddReview from './Pages/Dashboard/AddReview';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import HomePage from './Pages/Home/HomePage';
import Purchase from './Pages/Purchase/Purchase';
import Footer from './Pages/Shared/Footer/Footer';
import Navbar from './Pages/Shared/Navbar/Navbar';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from './Pages/UserAuthorization/Login';
import RequireAuth from './Pages/UserAuthorization/RequireAuth';
import SignUp from './Pages/UserAuthorization/SignUp';
import { ToastContainer } from 'react-toastify';
import ManageAllProducts from './Pages/Dashboard/ManageAllProducts';
import Payment from './Pages/Payment/Payment';
import AllUsers from './Pages/Dashboard/AllUsers';
import RequireAdmin from './Pages/UserAuthorization/RequireAdmin';
import SearchProduct from './Pages/Products/SearchProduct';
import UpdateProduct from './Pages/Products/UpdateProduct';
import PaidOrders from './Pages/Dashboard/PaidOrders';
import DashIndex from './Pages/Dashboard/DashIndex';
import ChartView from './Pages/Dashboard/ChartView';
import OrderConfirmation from './Pages/Dashboard/OrderConfirmation';
import PaymentConfirmed from './Pages/Payment/PaymentConfirmed';
import CustomOrder from './Pages/Dashboard/CustomOrder';
import AllCustomOrders from './Pages/Dashboard/AllCustomOrders';
import RequireEmployee from './Pages/UserAuthorization/RequireEmployee';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path="/search" element={<SearchProduct></SearchProduct>}></Route>
        <Route path="/update" element={<UpdateProduct></UpdateProduct>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        {/* <Route path='/paid' element={<PaidOrders></PaidOrders>}></Route> */}
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
      
        <Route path='/payment/:id' element={
          <RequireAuth>
            <Payment></Payment>
          </RequireAuth>
        }></Route>

        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<DashIndex></DashIndex>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
          <Route path="payment_confirmation" element={<PaymentConfirmed></PaymentConfirmed>}></Route>
          
          <Route path="orders" element={<MyOrders></MyOrders>}></Route>
          <Route path="confirmed" element={<OrderConfirmation></OrderConfirmation>}></Route>
          <Route path="addNewProduct" element={<RequireAdmin><AddNewProduct></AddNewProduct></RequireAdmin>}></Route>
          <Route path="allPaidOrders" element={<RequireAdmin><PaidOrders></PaidOrders></RequireAdmin>}></Route>
          <Route path="allPaidOrders_emp" element={<RequireEmployee><PaidOrders></PaidOrders></RequireEmployee>}></Route>
          <Route path="updateStock" element={<RequireAdmin><SearchProduct></SearchProduct></RequireAdmin>}></Route>
          <Route path="updateStock_emp" element={<RequireEmployee><SearchProduct></SearchProduct></RequireEmployee>}></Route>
          <Route path="manageAllProduct" element={<RequireAdmin><ManageAllProducts></ManageAllProducts></RequireAdmin>}></Route>
          <Route path="stockOverview" element={<RequireAdmin><ChartView></ChartView></RequireAdmin>}></Route>
          <Route path="stockOverview_emp" element={<RequireEmployee><ChartView></ChartView></RequireEmployee>}></Route>
          <Route path="allUsers" element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>}></Route>
          <Route path="customOrder" element={<RequireEmployee><CustomOrder></CustomOrder></RequireEmployee>}></Route>
          <Route path="allCustomOrders" element={<RequireAdmin><AllCustomOrders></AllCustomOrders></RequireAdmin>}></Route>
          <Route path="allCustomOrders_emp" element={<RequireEmployee><AllCustomOrders></AllCustomOrders></RequireEmployee>}></Route>
        </Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
      <Footer></Footer>

    </div>
  );
}

export default App;
