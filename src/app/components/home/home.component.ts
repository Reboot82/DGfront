import { Component, OnInit } from '@angular/core';
import { DiscgolfService } from '../../services/discgolf.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  difficulty: string[] = [
    'Easy',
    'Amatuer',
    'Pro'
  ];
  courseform: FormGroup;
  validMessage: string = "";

  constructor(private discgolfService: DiscgolfService) { }

  ngOnInit(): void {
    this.courseform = new FormGroup({
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      difficulty: new FormControl('', Validators.required),
      holeNum: new FormControl('', Validators.required),
    })
  }

  submitRegistration() {
    if (this.courseform.valid) {
      this.validMessage = "Your course registration has been submitted. Thank you!";
      this.discgolfService.createCourseRegistration(this.courseform.value).subscribe(
        data => {
          this.courseform.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      )
    }
    else {
      this.validMessage = "Please fill out the form before submitting!"
    }
  }

}
