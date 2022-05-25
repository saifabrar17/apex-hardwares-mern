import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import 'react-toastify/dist/ReactToastify.css';
import Portfolio from './Pages/Blogs/Portfolio';
import AddNewProduct from './Pages/Dashboard/AddNewProduct';
import AddReview from './Pages/Dashboard/AddReview';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import Profile from './Pages/Dashboard/Profile';
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

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>

        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<Profile></Profile>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
          <Route path="orders" element={<MyOrders></MyOrders>}></Route>
          <Route path="addNewProduct" element={<AddNewProduct></AddNewProduct>}></Route>
          <Route path="manageAllProduct" element={<ManageAllProducts></ManageAllProducts>}></Route>
        </Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
     
    </div>
  );
}

export default App;
