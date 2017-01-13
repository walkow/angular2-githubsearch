import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    //private username = 'walkow';
    private username = 'bradtraversy';
    private client_id = '08803fbab0401720afab';
    private client_secret = 'ab92e422c39451ea5c1f3645ecf45f5efe2c878e';

    constructor(private _http:Http) {
        console.log('gh service run');
    }

    getAuthCreditenials() {
        return 'client_id=' + this.client_id + '&client_secret=' + this.client_secret;
    }

    getUser() {
        return this._http.get('https://api.github.com/users/' + this.username + '?' + this.getAuthCreditenials())
        .map(res => res.json());
    }

    getRepos() {
        return this._http.get('https://api.github.com/users/' + this.username  + '/repos' + '?' + this.getAuthCreditenials())
        .map(res => res.json());
    }   

    updateUsername(username:string) {
        this.username = username;
    } 

}
