import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DiscgolfService {

  constructor(private http:HttpClient) { }

  getCourses() {
    return this.http.get('/server/api/v1/discgolf');
  }

  getCourse(id: number) {
    return this.http.get('/server/api/v1/discgolf/' + id);
  }

  createCourseRegistration(course) {
    let body = JSON.stringify(course);
    return this.http.post('/server/api/v1/discgolf', body, httpOptions);
  }

}
