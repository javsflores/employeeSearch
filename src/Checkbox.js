import React, { useState, useEffect } from "react";

let employeeFilter = (employeeData, category) => {
  let listedItems = {};
  return employeeData.filter((employee) => {
    if (listedItems[employee[category]] === undefined) {
      listedItems[employee[category]] = true;
      return true;
    }
  });
};

let categoryList = (employeeData, category) => {
  let filteredEmployeeData = employeeFilter(employeeData, category);
  return filteredEmployeeData.map((employee) => {
    return { name: employee[category], checked: true };
  });
};

let displayedList = (displayed, category) => {
  let filteredEmployeeData = employeeFilter(displayed, category);
  let results = {};
  for (let i = 0; i < filteredEmployeeData.length; i++) {
    results[filteredEmployeeData[i][category]] = true;
  }
  return results;
};

const Checkbox = ({
  category,
  employeeData,
  handleCheckboxSelects,
  displayed,
}) => {
  const [checkboxes, setCheckboxes] = useState(
    categoryList(employeeData, category)
  );
  const [checkedCB, setCheckedCB] = useState(
    displayedList(displayed, category)
  );

  useEffect(() => {
    setCheckboxes(categoryList(employeeData, category));
  }, [employeeData]);

  useEffect(() => {
    setCheckedCB(displayedList(displayed, category));
  }, [displayed]);

  const handleCheckboxChange = (category, checkboxName, status) => {
    handleCheckboxSelects(category, checkboxName, status);
  };

  return (
    <div>
      <div>{`Filter by ${category}:`}</div>
      {checkboxes.map((checkbox, index) => {
        return (
          <div key={index}>
            <input
              type="checkbox"
              value="bubbles"
              checked={checkedCB[checkbox.name] === true ? true : false}
              id={index}
              name={checkbox.name}
              onChange={(e) =>
                handleCheckboxChange(
                  category,
                  checkbox.name,
                  checkedCB[checkbox.name]
                )
              }
              style={{ cursor: "pointer" }}
            ></input>
            <label
              htmlFor={checkbox.name}
              onClick={(e) =>
                handleCheckboxChange(
                  category,
                  checkbox.name,
                  checkedCB[checkbox.name]
                )
              }
              style={{ cursor: "pointer" }}
            >
              {checkbox.name}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default Checkbox;
