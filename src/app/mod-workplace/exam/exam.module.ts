import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamComponent } from './exam-component/exam-component.component';
import { ExamFormComponent } from './exam-form-component/exam-form-component.component';
import { ExamRouting } from './exam-routing';
@NgModule({
  imports: [
    CommonModule,ExamRouting
  ],
  declarations: [ExamComponent, ExamFormComponent]
})
export class ExamModule { }
