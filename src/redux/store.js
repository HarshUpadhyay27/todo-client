import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import alertReducer from "./reducer/alert";
import { addTaskReducer, getTaskReducer } from "./reducer/task";
const middleware = [thunk];

const reducer = combineReducers({
  alert: alertReducer,
  addTask: addTaskReducer,
  getTask: getTaskReducer
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
