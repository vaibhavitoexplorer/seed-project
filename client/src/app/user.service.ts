import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUserDetails(id): void {
    id = '5ec7b8d0e053de224876005d';
    console.log(this.httpClient.get( `${environment.apiURL} user/${id}`));
  }
}
