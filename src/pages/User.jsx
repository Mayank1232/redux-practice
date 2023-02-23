import React from "react";

import Table from "./Table";

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
      <Table />
    </div>
  );
}

export default User;
