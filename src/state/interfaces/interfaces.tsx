export interface TodoInterface{
    Title:String,
    Description:String,
    Date:String,
    Completed:boolean
  }

export interface stateInterface {
    Completed:TodoInterface[],
    Inprogress:TodoInterface[]
}

export interface readactionInterface  {
    type:String,
    payload:{
        Completed?:TodoInterface[],
        Inprogress?:TodoInterface[]
    }
}
