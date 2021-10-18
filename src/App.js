import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import AllTask from "./screens/AllTask";
import AddTask from "./screens/AddTask";
import UpdateTask from "./screens/UpdateTask";
import Footer from "./component/Footer";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, getTask } from "./redux/action/task";

const App = (props) => {
  const history = useHistory()
  const [task, setTask] = useState({
    title: "",
    decrption: "",
  });
  const dispatch = useDispatch();
  const res = useSelector((state) => state.getTask);
  const res2 = useSelector((state) => state.addTask);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(task));
  };

  useEffect(() => {
    dispatch(getTask());
  }, [dispatch, res2.task]);

  const handleDelete = (id)=>{
    dispatch(deleteTask(id))
  }

  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Route exact path="/"><AllTask task={res.task} handleDelete={handleDelete} /></Route>
        <Route exact path="/addtask">
          <AddTask handleChange={handleChange} handleSubmit={handleSubmit} />
        </Route>
        <Route exact path="/updatetask/:id" component={UpdateTask} />
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
