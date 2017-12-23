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
alert(JSON.stringify(member));
const body = {"memberid":3,
  "studentID":"2017218036",
  "password":"1",
  "fzdx":1383316075000,
  "rdrq":1512224900000,
  "name":"苗旭",
  "privilegeType":2,
  "tjsq":1513866520000,
  "rdjjfz":1512138495000
}
    return this.http
      .put('/api/partymember', body, {headers: this.headers})
      .toPromise()
      .then(() => member);
  }
  create(member: Member): Promise<Member> {
    return this.http
      .post('/api', JSON.stringify(member), {headers: this.headers})
      .toPromise()
      .then(data => data['data'] as  Member)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
