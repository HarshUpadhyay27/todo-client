import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>
        <Link to="/">Task App</Link>
      </h1>
      <button>
        <Link to="/addtask">Add Task</Link>
      </button>
    </nav>
  );
};

export default Navbar;
