import { Component, OnInit } from '@angular/core';
import { DiscgolfService } from '../../services/discgolf.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {

  public courseReg;

  constructor(private discgolfService: DiscgolfService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCourseReg(this.route.snapshot.params.id)
  }

  getCourseReg(id:number) {
    this.discgolfService.getCourse(id).subscribe(
      data => {
        this.courseReg = data;
      },
      err => console.error(err),
      () => console.log('course loaded')
    );
  }

}
