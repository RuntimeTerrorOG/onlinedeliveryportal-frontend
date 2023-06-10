import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import UserList from "./pages/userList/UserList";
import LineChart from "./pages/lineChart/LineChart";
import CustomerList from "./pages/customerList/CustomerList";
import BarChart from "@mui/icons-material/BarChart";
import Faq from "./pages/faq/Faq";


function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/customers">
            <CustomerList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
          <Route path="/Linechart">
            <LineChart /> 
          </Route>
          <Route path="/Barchart">
          <BarChart /> 
          </Route>
          <Route path="/faq">
            <Faq />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;