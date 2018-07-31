import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit() {
    this.login();
  }
  login() {
    this.loading = true;
    // this.authenticationService.login(this.model.username, this.model.password)
    //   .subscribe(
    //   data => {
    //     this.router.navigate([this.returnUrl]);
    //   },
    //   error => {
    //     this.alertService.error(error);
    //     this.loading = false;
    //   });
  }
}
