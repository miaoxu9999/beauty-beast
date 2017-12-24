import {Injectable} from '@angular/core';
import {Member} from './member';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class MemberService {
  private headers = new HttpHeaders().set("Content-Type", "application/json");
  constructor(private http: HttpClient) {}
  getMembers(): Promise<Member[]> {
    return this.http.get('/api/partymember')
      .toPromise()
      .then(data => data['data'] as Member[])
      .catch(this.handleError);
  }
  getMemberById(accountid:any): Promise<Member>{
    return this.http.get('/api/partymember/' + accountid)
      .toPromise()
      .then(data => data['data'] as Member
      )
      .catch(this.handleError);
  }
  update(member: Member): Promise<Member> {
    return this.http
      .put('/api/partymember', JSON.stringify(member), {headers: this.headers})
      .toPromise()
      .then(() => member).catch(this.handleError);
  }
  create(member: Member): Promise<Member> {
    return this.http
      .post('/api', JSON.stringify(member), {headers: this.headers})
      .toPromise()
      .then(data => data['data'] as  Member)
      .catch(this.handleError);
  }
  delete(id: number): Promise<void> {
    return this.http.delete('/api/partymember/' + id,{headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
