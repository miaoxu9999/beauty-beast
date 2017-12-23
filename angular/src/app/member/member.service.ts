import {Injectable} from '@angular/core';
import {Member} from './member';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MemberService {
  constructor(private http: HttpClient) {}
  getMembers(): Promise<Member[]> {
    return this.http.get('/api/partymember')
      .toPromise()
      .then(data => data as Member[])
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
