import React, { createContext, useState, useContext } from "react";
import axios from "axios";

const EmployeeContext = createContext();

export function useEmployeeContext() {
  return useContext(EmployeeContext);
}

function DataProvider({ children }) {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    const employeesData = await fetchData();
    setEmployees(employeesData);
  };

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://opensheet.elk.sh/1gH5Kle-styszcHF2G0H8l1w1nDt1RhO9NHNCpHhKK0M/employees"
      );
      return res.data;
    } catch (err) {
      console.log(`Error ${err}`);
    }
  };

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        setEmployees,
        fetchData,
        fetchEmployees,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}

export default DataProvider;
