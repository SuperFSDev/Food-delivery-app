import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import PageNotFound from './Pages/PageNotFound';
import AuthProvider from './context/AuthProvider';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import AboutUs from './Pages/AboutUs/AboutUs';
import ContactUs from './Pages/ContactUs/ContactUs';
import AllProduct from './Pages/AllProduct/AllProduct';
import OrderPayments from './Pages/Payment/OrderPayments';
function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/about-us">
              <AboutUs></AboutUs>
            </Route>
            <Route exact path="/contact-use">
              <ContactUs></ContactUs>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute exact path='/product-details/:id'>
              <ProductDetails></ProductDetails>
            </PrivateRoute>
            <PrivateRoute exact path='/product-order/:id'>
              <OrderPayments></OrderPayments>
            </PrivateRoute>
            <Route exact path="/all-products">
              <AllProduct></AllProduct>
            </Route>
            <Route exact path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
        </Router>
        <Footer></Footer>
      </AuthProvider>


    </>
  );
}

export default App;
