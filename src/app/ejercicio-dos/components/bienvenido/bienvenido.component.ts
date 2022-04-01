import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/servicios/auth-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {

  userDetail!: any;
  constructor(
      private authService: AuthServiceService,
      private router:Router
    ) { }

  ngOnInit(): void {
    this.authService.userDetails().subscribe(response => {
      if (response !== null) {
        this.userDetail = response.email;
      } else {
        this.router.navigateByUrl('/ejercicio-dos/login');
      }
    }, error => {
      console.log(error);
    })
  }

  deslogueo() {
    this.authService.signoutUser()
      .then(res => {
        this.router.navigateByUrl('/ejercicio-dos/login');
      })
      .catch(error => {
        console.log(error);
      })
  }

}
