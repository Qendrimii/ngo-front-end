import { Pipe, PipeTransform } from '@angular/core';
import { Student } from './students.component';


@Pipe({
  name: 'studentsFilter',
  pure: false

})
export class StudentsFilterPipe implements PipeTransform {
  private counter = 0;

  transform(students: Student[], searchTerm: string): Student[] {
    this.counter++;

    if (!students || searchTerm) { 
    return students;
  }

    return students.filter(student =>
      student.firstName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
      
  }

}
