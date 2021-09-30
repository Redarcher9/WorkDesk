export interface TodoInterface{
    Title:String,
    Description:String,
    Date:Date,
    Completed:boolean
  }

export interface stateInterface {
    Completed:TodoInterface[],
    Inprogress:TodoInterface[]
}

export interface readActionInterface  {
    type:String,
    payload:{
        Completed:TodoInterface[],
        Inprogress:TodoInterface[]
    }
}
