import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { MicrosoftGraphUserDto } from '../types/dto/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);

  getUser() {
    return this.http.get<MicrosoftGraphUserDto>('/api/v1/user');
  }
}
