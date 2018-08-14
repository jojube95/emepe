import { Injectable } from '@angular/core';
import {AuthService} from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private authService: AuthService) { }

  getUserData(){
    const token = this.authService.getToken();
  }
}
