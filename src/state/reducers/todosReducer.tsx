import { stateInterface,readactionInterface } from "../interfaces/interfaces";

type Action = readactionInterface 

const INITIAL_STATE={
    Completed:[],
    Inprogress:[]
}

const todoReducer = (state:stateInterface = INITIAL_STATE, action: Action) =>{
    switch(action.type){
        case "readTodos":
            return {
                Completed:action.payload.Completed,
                Inprogress:action.payload.Inprogress
            };
        case "addTodo":
            return {
                ...state,
                Inprogress:action.payload.Inprogress
            };
        case "deleteTodo":
            return {
                ...state,
                Inprogress:action.payload.Inprogress,
            };
        case "doneTodo":
            return {
                Inprogress:action.payload.Inprogress,
                Completed:action.payload.Completed
            };
        default:
            return state;
    }
}

export default todoReducer;