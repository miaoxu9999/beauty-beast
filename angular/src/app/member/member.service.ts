import {Injectable} from '@angular/core';
import {Member} from './member';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

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
  getMembersByPage(page: any, size: any): Promise<any> {
    return this.http.post('/api/partymember_bypage', null, {
      params: new HttpParams().set('page', page).set('size', size)
    })
      .toPromise()
      .then(data => data['data'] as any)
      .catch(this.handleError);
  }
  getMemberById(accountid:any): Promise<Member>{
    return this.http.get('/api/partymember/' + accountid)
      .toPromise()
      .then(data => data['data'] as Member
      )
      .catch(this.handleError);
  }
  update(member: Member): Promise<number> {
    return this.http
      .put('/api/partymember', JSON.stringify(member), {headers: this.headers})
      .toPromise()
      .then(data => data['code'] as number).catch(this.handleError);
  }
  create(member: Member): Promise<number> {
    return this.http
      .post('/api/partymember', JSON.stringify(member), {headers: this.headers})
      .toPromise()
      .then(data => data['code'] as  number)
      .catch(this.handleError);
  }
  delete(id: number): Promise<number> {
    return this.http.delete('/api/partymember/' + id, {headers: this.headers})
      .toPromise()
      .then(data => data['code'] as number)
      .catch(this.handleError);
  }
  search(value: any): Promise<Member[]> {
    return this.http.post('/api/partymemberlike', null, {
      params: new HttpParams().set('condition', value)
    })
      .toPromise()
      .then(data => data['data']['content'] as Member[])
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
