import React from "react";
import { Link } from "react-router-dom";

const AllTask = ({ task, handleDelete }) => {
  return (
    <div className="allTask">
      <div className="cards">
        {task &&
          task.map((ele) => (
            <div className="card" key={ele._id}>
              <h1>{ele.title}</h1>
              <p>{ele.decrption}</p>
              <div>
                <button className="update">
                  <Link
                    to={`/updatetask/${ele._id}`}
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    Update
                  </Link>
                </button>
                <button
                  className="delete"
                  onClick={() => handleDelete(ele._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllTask;
