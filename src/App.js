import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllEmployees from "./pages/AllEmployees";
import EmployeeDetails from "./pages/EmployeeDetails";
import DataProvider from "./context/DataProvider";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllEmployees />}></Route>
          <Route path="/details/:name" element={<EmployeeDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
