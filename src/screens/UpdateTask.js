import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { updateTask } from "../redux/action/task";

const UpdateTask = ({ match }) => {
  const id = match.params.id;
  const res = useSelector((state) => state.getTask);
  const dispatch = useDispatch();
  const history = useHistory()

  const data = res.task && res.task.filter((ele) => ele._id === id);

  const [task, setTask] = useState({
    title: data && data[0].title,
    decrption: data && data[0].decrption,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTask(id, task));
    history.push("/")
  };

  return (
    <div className="taskForm">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="decrption">Decrption</label>
          <textarea
            type="text"
            rows={4}
            id="decrption"
            name="decrption"
            value={task.decrption}
            onChange={(e) => setTask({ ...task, decrption: e.target.value })}
          />
        </div>
        <button type="submit">UPDATE TASK</button>
      </form>
    </div>
  );
};

export default UpdateTask;
