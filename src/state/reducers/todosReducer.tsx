import { stateInterface,readActionInterface } from "../interfaces/interfaces";

type Action = readActionInterface 

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
                Inprogress:action.payload.Inprogress
            };
        case "doneTodo":
            return {
                Completed:action.payload.Completed,
                Inprogress:action.payload.Inprogress
            };
        default:
            return state;
    }
}

export default todoReducer;