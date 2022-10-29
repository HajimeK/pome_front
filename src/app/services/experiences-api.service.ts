import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experience, Tag } from './model';

@Injectable({
  providedIn: 'root'
})
export class ExperiencesApiService {

  constructor(private http: HttpClient) { }

  getTags(): Observable<Tag[]> {
    // API call
    return this.http.get<Tag[]>('http://pomeapi-env.eba-peksw24h.ap-northeast-1.elasticbeanstalk.com/api/tag/list');
  }

  getExperiences(tag: string): Observable<Experience[]> {
    return this.http.get<Experience[]>(`http://pomeapi-env.eba-peksw24h.ap-northeast-1.elasticbeanstalk.com/api/experience/${tag}`)
  }
}
