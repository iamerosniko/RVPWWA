import { Component, OnInit } from '@angular/core';
import { TempUser,Question,Answer } from '../../../com_entities/workplace-entities';
import { ApiService } from '../../../com_services/workplace-services/api-service';
import { AppSettings } from '../../../com_entities/app-settings';

@Component({
  selector: 'app-exam-component',
  templateUrl: './exam-component.component.html',
  styleUrls: ['./exam-component.component.css']
})
export class ExamComponent implements OnInit {

  constructor(private apiService:ApiService) { }
  tempUser:TempUser=JSON.parse(sessionStorage.getItem('workplace_user'));
  
  breadcrumbs =['Take the Exam'];
  tempquestions:Question[]=[];
  questions:Question[]=[];
  answers:Answer[]=[];
  score:number = 0;
  canSubmit:boolean=false;
  viewScore:boolean=false;

  ngOnInit() {
    this.getDependencies();
  }
  async getDependencies(){
    this.viewScore=this.tempUser.QuizScore>0;
    this.tempquestions=<Question[]> await this.getAll('Questions');
    this.answers=<Answer[]> await this.getAll('Answers');
    var shuffledQuestions=<Question[]> await this.shuffle(this.tempquestions);
    this.getQuestions(shuffledQuestions);
  }
  async shuffle(sourceArray:any[]):Promise<any[]>{
    for (var i = 0; i < sourceArray.length - 1; i++) {
      var j = i + Math.floor(Math.random() * (sourceArray.length - i));
      var temp = sourceArray[j];
      sourceArray[j] = sourceArray[i];
      sourceArray[i] = temp;
    }
    return new Promise<any[]>((resolve)=>resolve(sourceArray))
  }
  //this will get only 10 items of questions or length of shuffled questions
  getQuestions(shuffledQuestions:Question[]){
    this.questions=[];
    var limit:number=(shuffledQuestions.length<10)?shuffledQuestions.length:10;
    for (var i = 0 ; i<limit; i++ ){
      var question = shuffledQuestions[i];
      this.questions.push(question);
    }
  }
  getAnswers(question:Question):Answer[]{
    var answers=this.answers.filter(x=>x.QuestionID==question.QuestionID);
    return answers;
  }
  //submits the score
  async submitScore(){
    this.tempUser.QuizScore=this.score;
    this.tempUser.QuizItem=this.questions.length;
    console.log(await this.putData('TemporaryUsers',this.tempUser,this.tempUser.ID.toString()))
    //update sessionstorage of workplace_user
    sessionStorage.setItem('workplace_user',JSON.stringify(this.tempUser));
    this.viewScore=true;
  }
  checkAnswers():void{
    this.score=0;
    var ctr:number=0;
    ctr=this.questions.filter(x=>x.Answer==null).length
    for (let question of this.questions) {
        //console.log(question.Answer);
        this.score = this.score + (question.Answer==1 ? 1 : 0);
    }
    this.canSubmit=ctr==0;
  }
  //api helper
  async getAll(controller:string){
    this.apiService.apiUrl=AppSettings.GETAPIURL(controller);
    var result=await this.apiService.getAll();
    return new Promise<any[]>((resolve)=> resolve(result));
  }

  async putData(controller:string,data:any,ID:string){
    this.apiService.apiUrl=AppSettings.GETAPIURL(controller);
    var result=await this.apiService.putData(data,ID);
    return new Promise<any[]>((resolve)=> resolve(result));
  }
}
