import { ADD_TASK, ALERT, DELETE_TASK, GET_TASK, UPDATE_TASK } from "./actionType";
import axios from "axios";

export const addTask = (data) => async (disptch) => {
  try {
    disptch({
      type: ALERT,
      payload: { loading: true },
    });
    const res = await axios.post("/api/task", data);
    disptch({
      type: ADD_TASK,
      payload: res.data.data ,
    });
    disptch({
      type: ALERT,
      payload: { success: res.data.msg },
    });
  } catch (error) {
    disptch({
      type: ALERT,
      payload: {
        error: error.response.data.msg,
      },
    });
  }
};

export const getTask = () =>async (disptch)=>{
  try {
    disptch({
      type: ALERT,
      payload: { loading: true },
    });
    const res = await axios.get("/api/task")
    disptch({
      type: GET_TASK,
      payload: res.data.data,
    });
  } catch (error) {
    disptch({
      type: ALERT,
      payload: {
        error: error.response.data.msg,
      },
    });
  }
}

export const updateTask = (id, data)=> async (dispatch)=>{
  try {
    dispatch({
      type: ALERT,
      payload: { loading: true },
    });
    const res = await axios.patch(`/api/task/${id}`, data)
    dispatch({
      type: UPDATE_TASK,
      payload: res.data.data,
    });
    dispatch({
      type: ALERT,
      payload: { success: res.data.msg },
    });
  } catch (error) {
    dispatch({
      type: ALERT,
      payload: {
        error: error.response.data.msg,
      },
    });
  }
}

export const deleteTask = (id)=> async (dispatch)=>{
  try {
    dispatch({
      type: ALERT,
      payload: { loading: true },
    });
    const res = await axios.delete(`/api/task/${id}`)
    dispatch({
      type: DELETE_TASK,
      payload: res.data.data,
    });
    dispatch({
      type: ALERT,
      payload: { success: res.data.msg },
    });
  } catch (error) {
    dispatch({
      type: ALERT,
      payload: {
        error: error.response.data.msg,
      },
    });
  }
}