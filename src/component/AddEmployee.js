import React from "react";

const AddEmployee = () => {
  return (
    <>
      <div className="containner ">
        <h1 className="text-center"> Add Employee</h1>
        <div>
          <form>
            <label>Employee Name:</label>
            <input type="text" placeholder="Enter Name.." />
            <label>Employee Age:</label>
            <input type="text" placeholder="Enter age.." />
            <label>Employee Email:</label>
            <input type="text" placeholder="Enter Email.." />
            <label>Employee Mo:</label>
            <input type="text" placeholder="Enter Mobile.." />
            <button> Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};
export default AddEmployee;
