import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ErrorComponent } from './components/error/error.component';
import { ListTodosComponent } from './components/list-todos/list-todos.component';
import { RouteGuardService } from './service/route-guard.service';
import { TodoComponent } from './components/todo/todo.component';
import { ListStudentsComponent } from './components/students/students.component';
import { ListTrainersComponent } from './components/trainers/trainers.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { StudentComponent } from './components/student/student.component';
import { TrainerComponent } from './components/trainer/trainer.component';
import { GroupsComponent } from './components/groups/groups.component';
import { GroupComponent } from './components/group/group.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ListStudentPaymentsComponent } from './components/list-student-payments/list-student-payments.component';
import { StudentPaymentsComponent } from './components/student-payments/student-payments.component';
import{WelcomeComponent} from './components/welcome/welcome.component';


//welcome
const routes: Routes = [
  { path: '', component: LoginComponent },//canActivate
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: ListTodosComponent, canActivate: [RouteGuardService]},
  { path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService] },
  { path: 'dashboard/:id', component: TodoComponent, canActivate: [RouteGuardService] },
  { path: 'students', component: ListStudentsComponent, canActivate: [RouteGuardService] },
  { path: 'trainers', component: ListTrainersComponent, canActivate: [RouteGuardService] },
  { path: 'trainers/:id', component: TrainerComponent, canActivate: [RouteGuardService] },
  { path: 'students/:id', component: StudentComponent, canActivate: [RouteGuardService] },
  { path: 'payments', component: PaymentsComponent, canActivate: [RouteGuardService] },
  { path: 'payments/:id', component: PaymentComponent, canActivate: [RouteGuardService] },
  { path: 'studentstatus', component: ListStudentPaymentsComponent, canActivate: [RouteGuardService] },
  { path: 'studentstatus/:id', component: StudentPaymentsComponent, canActivate: [RouteGuardService] },
  { path: 'groups', component: GroupsComponent, canActivate: [RouteGuardService] },
  { path: 'groups/:id', component: GroupComponent, canActivate: [RouteGuardService] },
  { path: '**', component: ErrorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
