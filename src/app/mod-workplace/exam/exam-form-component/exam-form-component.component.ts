import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { TempUser,Question,Answer } from '../../../com_entities/workplace-entities';
@Component({
  selector: 'exam-form',
  templateUrl: './exam-form-component.component.html',
  styleUrls: ['./exam-form-component.component.css']
})
export class ExamFormComponent implements OnInit {
  @Input() question:Question;
  @Input() answers:Answer[]=[];
  @Output() answerChange = new EventEmitter();
  @Output() checkAnswers = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  
  getAnswer(ans:boolean){
    var userAnswer = ans==true ? 1 : -1 ;
    this.question.Answer=userAnswer;
    this.answerChange.emit(this.question);
    this.checkAnswers.emit();
  }

}
