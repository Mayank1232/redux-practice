import React from "react";
import BootstrapNavbar from "../components/Navbar/Navbar";

import ReactTable from "./Table";

function User() {
  // react table

  const data = [
    {
      name: "Alice",
      age: 30,
      occupation: "Software Engineer",
    },
    {
      name: "Bob",
      age: 25,
      occupation: "Designer",
    },
    {
      name: "Charlie",
      age: 35,
      occupation: "Product Manager",
    },
  ];

  return (
    <div>
      <ReactTable />
    </div>
  );
}

export default User;
