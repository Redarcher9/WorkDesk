export interface TodoInterface{
    Title:String,
    Description:String,
    Date:Date
  }

export interface todoState {
    Completed:TodoInterface[],
    Inprogress:TodoInterface[],
    selected:number
}

export interface todoDb {
    Completed:TodoInterface[],
    Inprogress:TodoInterface[]
}