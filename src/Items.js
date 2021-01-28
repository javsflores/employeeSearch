import React from "react";
import "./Items.css";

const Items = ({ employeeData }) => {
  return (
    <div>
      {employeeData.map((employee, index) => {
        return (
          <div className="items" key={index}>
            <div className="item">{employee.name}</div>
            <div className="item">{employee.department}</div>
            <div className="item">{employee.age}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Items;
