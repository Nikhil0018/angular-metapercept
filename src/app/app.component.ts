import { Component, VERSION } from '@angular/core';
import { ClassData } from './class.model';
import { SchoolData } from './school.model';
import { StudentDataModel } from './student-data.model';
import { StudentModel } from './student.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public selectedClass: ClassData;

  public classesData: ClassData[] = [
    {
      id: '1',
      schoolId: '2',
      status: 'ACTIVE',
      students: [
        {
          assignment: 'YEAH',
          studentId: 'A101',
        },
        {
          assignment: 'NOPE',
          studentId: 'A102',
        },
      ],
    },

    {
      id: '2',
      schoolId: '1',
      status: 'IN-ACTIVE',
      students: [
        {
          assignment: 'NOPE',
          studentId: 'A102',
        },
      ],
    },
  ];

  public studentsData: StudentDataModel[] = [
    {
      id: 'A101',
      rollno: '01',
      lastname: 'LastnameA101',
      middlename: '',
      firstname: 'StudentA101',
      dateOfJoining: '2021-02-13',
    },
    {
      id: 'A102',
      rollno: '02',
      lastname: 'LastnameA102',
      middlename: '',
      firstname: 'StudentA102',
      dateOfJoining: '2021-04-24',
    },
    {
      id: 'B101',
      rollno: '01',
      lastname: 'LastnameB101',
      middlename: '',
      firstname: 'StudentB101',
      dateOfJoining: '2020-10-20',
    },
    {
      id: 'B102',
      rollno: '02',
      lastname: 'LastnameB102',
      middlename: '',
      firstname: 'StudentB102',
      dateOfJoining: '2020-02-18',
    },
    {
      id: 'B103',
      rollno: '03',
      lastname: 'LastnameB103',
      middlename: '',
      firstname: 'StudentB103',
      dateOfJoining: '2020-06-16',
    },
  ];

  public schoolsData: SchoolData[] = [
    {
      id: '1',
      name: 'school1',
      since: '2020-01-20',
    },
    {
      id: '2',
      name: 'school2',
      since: '2020-10-24',
    },
    {
      id: '3',
      name: 'school3',
      since: '2021-01-18',
    },
  ];

  public status: string;
  ngAfterViewInit() {
    this.selectedClass = this.classesData[0];
  }

  public addStudent() {
    this.selectedClass.students.push({});
  }

  public onClassChange(event) {
    console.log(this.selectedClass);
  }

  public addClass() {
    this.classesData.push({
      id: (this.classesData.length + 1).toString(),
      students: []
    });
    this.selectedClass = this.classesData[this.classesData.length-1];
  }

  public deleteClass(): void {
    if (this.selectedClass != null && this.classesData.length > 0) {
      const index = this.classesData.indexOf(this.selectedClass);
      this.classesData.splice(index, 1);
    }
    if(this.classesData.length>0){
      this.selectedClass = this.classesData[0];
    }
  }
}
