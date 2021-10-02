import { Dispatch } from "redux";
import { TodoInterface } from "../interfaces/interfaces";

export const readTodos = () =>{

    var mystorage = window.localStorage;
    var Completed = JSON.parse(mystorage.getItem("completed")|| "[]");
    var Inprogress = JSON.parse(mystorage.getItem("inprogress")||"[]");

    var todolist={
        Completed:Completed,
        Inprogress:Inprogress,
        selected:1
    }


    return (dispatch:Dispatch) =>{
        dispatch({
            type:"readTodo",
            payload:todolist
        })
    }
}

export const addTodo = (todo:TodoInterface) =>{

    var mystorage = window.localStorage;
    var Inprogress = JSON.parse(mystorage.getItem("inprogress")|| "[]");
    Inprogress.push(todo);
    mystorage.setItem('inprogress',JSON.stringify(Inprogress))

    var todolist={
        Completed:Inprogress,
        Inprogress:Inprogress,
        selected:1
    }

    return (dispatch:Dispatch) => {
        dispatch({
            type:"addTodo",
            payload:todolist
        })
    }
}

export const deleteTodo = (todoid:number) =>{

    console.log("Inside DeleteTodos")

    var mystorage = window.localStorage;
    var Inprogress = JSON.parse(mystorage.getItem("inprogress")|| "[]");

    Inprogress = Inprogress.filter(function(ele:TodoInterface,index:number){
        if(index!==todoid)
            return ele
    })

    var todolist={
        Completed:Inprogress,
        Inprogress:Inprogress,
        selected:1
    }


    mystorage.setItem('inprogress',JSON.stringify(Inprogress))

    return (dispatch:Dispatch) => {
        dispatch({
            type:"deleteTodo",
            payload:todolist
        })
    }
}

export const doneTodo = (todoid:number) =>{

    var mystorage = window.localStorage;
    var Completed = JSON.parse(mystorage.getItem("completed")|| "[]");
    var Inprogress = JSON.parse(mystorage.getItem("inprogress")|| "[]");


    Completed.push(Inprogress[todoid])


    Inprogress =Inprogress.filter(function(ele:TodoInterface,index:number){
        if(index!==todoid)
            return ele
    })

    var todolist={
        Completed:Completed,
        Inprogress:Inprogress,
        selected:1
    }

    mystorage.setItem('inprogress',JSON.stringify(Inprogress))
    mystorage.setItem('completed',JSON.stringify(Completed))


    return (dispatch:Dispatch) => {
        dispatch({
            type:"doneTodo",
            payload:todolist
        })
    }
}

export const toggleSideBar = (toggler:number) =>{
    var mystorage = window.localStorage;
    var Inprogress = JSON.parse(mystorage.getItem("inprogress")||"[]");
    var Completed = JSON.parse(mystorage.getItem("completed")|| "[]");

    var todolist={
        Completed:Completed,
        Inprogress:Inprogress,
        selected:toggler
    }
    console.log("Inside toggleSideBar")
    console.log(todolist)
    return (dispatch:Dispatch) => {
        dispatch({
            type:"toggleSidebar",
            payload:todolist
        })
    }
}