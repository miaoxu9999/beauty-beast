import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Registration} from './registration';

@Injectable()
export class CheckInService {
  private headers = new HttpHeaders().set("Content-Type", "application/json");
  constructor(private http: HttpClient) {}
  getRegistrations(): Promise<Registration[]> {
    return this.http.get('api/Registration')
      .toPromise()
      .then(data => data['data'] as Registration[])
      .catch(this.handleError);
  }



  getRegistrationById(registrationId:any): Promise<Registration>{
    return this.http.get('/api/Registration/' + registrationId)
      .toPromise()
      .then(data => data['data'] as Registration
      )
      .catch(this.handleError);
  }
  update(registration: Registration): Promise<number> {
    return this.http
      .put('/api/Registration', JSON.stringify(registration), {headers: this.headers})
      .toPromise()
      .then(data => data['code'] as number).catch(this.handleError);
  }
  create(registration: Registration): Promise<Registration> {
    return this.http
      .post('/api/Registration', JSON.stringify(registration), {headers: this.headers})
      .toPromise()
      .then(data => data['data'] as  Registration)
      .catch(this.handleError);
  }
  delete(id: number): Promise<number> {
    return this.http.delete('/api/Registration/' + id, {headers: this.headers})
      .toPromise()
      .then(data => data['code'] as number)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
