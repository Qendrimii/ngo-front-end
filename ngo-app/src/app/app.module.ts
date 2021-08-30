import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { ListTodosComponent } from './components/list-todos/list-todos.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoutComponent } from './components/logout/logout.component';
import { TodoComponent } from './components/todo/todo.component';
import { HttpIntercepterBasicAuthService } from './service/http/http-intercepter-basic-auth.service';
import { ListStudentsComponent } from './components/students/students.component';
import { ListTrainersComponent } from './components/trainers/trainers.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { StudentComponent } from './components/student/student.component';
import { TrainerComponent } from './components/trainer/trainer.component';
import { StudentsFilterPipe } from './components/students/students-filter.pipe';
import { PaymentsFilterPipe } from './components/payments/payments-filter.pipe';
import { PaymentComponent } from './components/payment/payment.component';
import { GroupsComponent } from './components/groups/groups.component';
import { GroupComponent } from './components/group/group.component';
import { StudentPaymentsComponent } from './components/student-payments/student-payments.component';
import { ListStudentPaymentsComponent} from './components/list-student-payments/list-student-payments.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TestComponent } from './components/test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TrainerComponent,
    GroupsComponent,
    StudentPaymentsComponent,
    ListStudentPaymentsComponent,
    PaymentsComponent,
    ErrorComponent,
    MenuComponent,
    FooterComponent,
    DashboardComponent,
    ErrorComponent,
    FooterComponent,
    GroupComponent,
    LoginComponent,
    PaymentComponent,
    ListTodosComponent,
    StudentsFilterPipe,
    PaymentsFilterPipe,
    LogoutComponent,
    GroupComponent,
    TodoComponent,
    DashboardComponent,
    TestComponent,
    ListStudentsComponent,
    ListTrainersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterBasicAuthService, multi: true}
      ],
  bootstrap: [AppComponent]
})
export class AppModule { }
