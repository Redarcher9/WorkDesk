import { stateInterface,readActionInterface } from "../interfaces/interfaces";

type Action = readActionInterface 

const INITIAL_STATE={
    Completed:[],
    Inprogress:[],
    selected:1
}

const todoReducer = (state:stateInterface = INITIAL_STATE, action: Action) =>{
    switch(action.type){
        case "readTodo":
            return {
                ...state,
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
                ...state,
                Completed:action.payload.Completed,
                Inprogress:action.payload.Inprogress
            };
        case "toggleSidebar":
            return{
                ...state,
                selected:action.payload.selected
            }
        default:
            return state;
    }
}

export default todoReducer;