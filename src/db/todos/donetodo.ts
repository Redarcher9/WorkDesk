export const doneTodo = (index:number) => {
    //Initialising localstorage variables
    var mystorage = window.localStorage;
    var Completed = JSON.parse(mystorage.getItem("completed")|| "[]");
    var Inprogress = JSON.parse(mystorage.getItem("inprogress")||"[]");  
    var todo = Inprogress[index]
    
    Inprogress.splice(index,1);
    mystorage.setItem('inprogress',JSON.stringify(Inprogress));
    Completed.unshift(todo)
    mystorage.setItem('completed',JSON.stringify(Completed))

    }