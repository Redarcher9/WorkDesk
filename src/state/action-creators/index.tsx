import { Dispatch } from "redux";
import { stateInterface } from "../interfaces/interfaces";

export const readTodos = (todo:stateInterface) =>{
    return (dispatch:Dispatch) =>{
        dispatch({
            type:"readTodo",
            payload:todo
        })
    }
}

export const addTodo = (todo:stateInterface) =>{
    return (dispatch:Dispatch) => {
        dispatch({
            type:"addTodo",
            payload:todo
        })
    }
}

export const deleteTodo = (todo:stateInterface) =>{
    return (dispatch:Dispatch) => {
        dispatch({
            type:"deleteTodo",
            payload:todo
        })
    }
}

export const doneTodo = (todo:stateInterface) =>{
    return (dispatch:Dispatch) => {
        dispatch({
            type:"doneTodo",
            payload:todo
        })
    }
}