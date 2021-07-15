// import { AuthService } from './../services/auth.service';
// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {
//   constructor(private router: Router,private authService:AuthService) { }
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Boolean {
//       if(!this.authService.isLoggedIn){
//         alert('isLoggedIn false')
//         this.router.navigate(['/regster'])
//         return false
//       }
//       alert('is Logged true')
//     return true;
//   }

// }
