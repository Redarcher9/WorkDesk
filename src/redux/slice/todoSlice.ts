import { createSlice ,PayloadAction} from "@reduxjs/toolkit";
import { TodoInterface, todoState,todoDb } from "../interface/todo";

const initialState :todoState= {
    Completed:[],
    Inprogress:[],
    selected:1
}

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers :{
        addTodo: (state,action: PayloadAction<TodoInterface>) => {
            //db variables
            var mystorage = window.localStorage;
            var Inprogress = JSON.parse(mystorage.getItem("inprogress")||"[]");
            //update State
            Inprogress.push(action.payload)
            state.Inprogress.push(action.payload)
        },
        readTodo: (state) => {
            //db variables
            var mystorage = window.localStorage;
            var Completed = JSON.parse(mystorage.getItem("completed")|| "[]");
            var Inprogress = JSON.parse(mystorage.getItem("inprogress")||"[]");
            console.log("Inside Redux toolkit ReadTodo");
            //update State
            state.Inprogress = Inprogress
            state.Completed = Completed
        },
        toogleSidebar: (state,action: PayloadAction<number>) =>{
            state.selected = action.payload;
            console.log("Inside TodoSidebar toogler")
        }
    }
})

export default todoSlice.reducer;
export const {addTodo,readTodo,toogleSidebar} = todoSlice.actions;