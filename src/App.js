import React, { useState, useEffect } from "react";
import Search from "./Search";
import Headers from "./Headers";
import Items from "./Items";
import Checkbox from "./Checkbox";
import employee_data from "./EmployeeData";
import "./App.css";

const allHeaders = ["Name", "Department", "Age"];

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [employeeData, setEmployeeData] = useState(employee_data);
  const [searchedData, setSearchedData] = useState(employee_data);

  useEffect(() => {
    let newEmployeeData = employee_data.filter((employee) => {
      return employee.name.toLowerCase().indexOf(searchValue.toLowerCase()) ===
        -1
        ? false
        : true;
    });
    setEmployeeData(newEmployeeData);
    setSearchedData(newEmployeeData);
  }, [searchValue]);

  const handleCheckboxSelects = (category, checkboxName, status) => {
    if (status) {
      let newEmployeeData = [...employeeData];
      for (let i = 0; i < newEmployeeData.length; i++) {
        if (newEmployeeData[i][category] === checkboxName) {
          newEmployeeData.splice(i, 1);
          i--;
        }
      }
      setEmployeeData(newEmployeeData);
    } else {
      let addEmployee = searchedData.filter((employee) => {
        if (employee[category] === checkboxName) {
          return true;
        }
        return false;
      });
      let newEmployeeData = [...employeeData, ...addEmployee];
      setEmployeeData(newEmployeeData);
    }
  };

  return (
    <div className="App">
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <Headers headers={allHeaders} />
      <Items employeeData={employeeData} />
      <div className="filters">
        <Checkbox
          category="department"
          employeeData={searchedData}
          handleCheckboxSelects={handleCheckboxSelects}
          displayed={employeeData}
        />
        <Checkbox
          category="age"
          employeeData={searchedData}
          handleCheckboxSelects={handleCheckboxSelects}
          displayed={employeeData}
        />
      </div>
    </div>
  );
};

export default App;
