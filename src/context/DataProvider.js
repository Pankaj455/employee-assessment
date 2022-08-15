import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const EmployeeContext = createContext();

export function useEmployeeContext() {
  return useContext(EmployeeContext);
}

function DataProvider({ children }) {
  const [employees, setEmployees] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetchData();
    const currentPage = JSON.parse(sessionStorage.getItem("page"));
    currentPage
      ? setPage(currentPage)
      : JSON.stringify(sessionStorage.setItem("page", 0));
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://opensheet.elk.sh/1gH5Kle-styszcHF2G0H8l1w1nDt1RhO9NHNCpHhKK0M/employees"
      );
      setEmployees(res.data);
    } catch (err) {
      console.log(`Error ${err}`);
    }
  };

  return (
    <EmployeeContext.Provider
      value={{ employees, setEmployees, page, setPage }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}

export default DataProvider;
