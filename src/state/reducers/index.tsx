import { combineReducers } from "redux";
import todoReducer from "./todosReducer";

const reducers = combineReducers({
    todo: todoReducer
});

export default reducers;

export type State = ReturnType<typeof reducers>