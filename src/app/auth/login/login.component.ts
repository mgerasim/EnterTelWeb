import { Component, OnInit } from '@angular/core';
import {AuthRequest} from '../../api/models/auth-request';
import notify from 'devextreme/ui/notify';
import {showError} from '../../shared/error-handle';
import {NavigationService} from '../../shared/services/navigation.service';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  auth = {
    userName: '',
    password: ''
  } as AuthRequest;

  constructor(
    private authService: AuthService,
    private navigationService: NavigationService
  ) {
  }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.auth).subscribe((data: any) => {
      notify('Авторизация успешна пройдена');
      this.navigationService.toEmployees();
    }, error => {
      showError(error);
    });
  }
}
