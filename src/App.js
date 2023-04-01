import Dashboard from "./Pages/Dashboard";
import Deliveries from "./Pages/Deliveries";


import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";





function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/">
        <Route index element={<Dashboard/>}/>
        <Route path = "Deliveries" element={<Deliveries/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
