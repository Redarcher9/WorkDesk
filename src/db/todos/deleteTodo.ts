export const deleteTodo = (index:number) => {
    //Initialising localstorage variables
    var mystorage = window.localStorage;
    var Inprogress = JSON.parse(mystorage.getItem("inprogress")||"[]");

    Inprogress.splice(index,1);
    mystorage.setItem('inprogress',JSON.stringify(Inprogress));
}