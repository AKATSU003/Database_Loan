import {BrowserRouter, Routes, Route} from "react-router-dom";
import Contracts from "./pages/Contract";
import Customers from "./pages/Customers";
import UpdateCon from "./pages/UpdateCon";
import UpdateCus from "./pages/UpdateCus";
import ContractDetail from "./pages/ContractDetail";
import CustomersDetail from "./pages/CustomersDetail";
import AddCon from "./pages/AddCon";
import AddCus from "./pages/AddCus";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/contract" element={<Contracts/>}/>
          <Route path="/contract/add" element={<AddCon/>}/>
          <Route path="/contract/detail/:ConID" element={<ContractDetail/>}/>
          <Route path="/contract/:ConID" element={<UpdateCon/>}/>

          <Route path="/customers" element={<Customers/>}/>
          <Route path="/customers/add" element={<AddCus/>}/>
          <Route path="/customers/detail/:CusID" element={<CustomersDetail/>}/>
          <Route path="/customers/update/:CusID" element={<UpdateCus/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
