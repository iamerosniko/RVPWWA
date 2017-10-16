export class Team {
    constructor (
        public TeamID : string,
        public TeamDesc : string,
        public IsActive : Boolean
    ){}
}

export class TempUser {
    constructor (
        public ID : number,
        public FirstName : string,
        public LastName : string,
        public TeamID : string,
        public LeaderID : number,
        public UserName : string,
        public QuizScore : number,
        public QuizItem : number,
        public IsActive : boolean
    ){}
}

export class Leader {
    constructor (
        public LeaderID : number,
        public LeaderName : string,
        public ManagerID : number,
        public LeaderResourceID :string,
        public ManagerResourceID:string
    ){}
}

export class Question {
    constructor (
        public QuestionID: string,//primary key
        public QuestionDesc: string,
        public IsCommon : Boolean,
        public IsMultipleAns : Boolean,
        public IsActive : Boolean,
        public Answer: number
    ){}
}

export class Answer {
    constructor (
        public AnswerID: string,//primary key
        public QuestionID: string,
        public AnswerDesc : string,
        public IsActive : Boolean,
        public IsCorrect : Boolean
    ){}
}

export class Resource {
    constructor (
        public ResourceID : string,
        public ResourceName:string,
        public ResourcePath : string,
        public ResourceCategory : string,
        public IsUrl : boolean
    ){}
}

export class TeamResource {
    constructor (
        public TeamResourceID : number,
        public TeamID:string,
        public ResourceID : string
    ){}
}
