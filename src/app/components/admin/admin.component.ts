import { Component, OnInit } from '@angular/core';
import { DiscgolfService } from '../../services/discgolf.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public courses;

  constructor(private discgolfService: DiscgolfService) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses() {
    this.discgolfService.getCourses().subscribe(
      data => { this.courses = data},
      err => console.error(err),
      () => console.log('courses loaded')
    );
  }

}
