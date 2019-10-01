import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs';
@Injectable({
providedIn: 'root'
})
export class SecureInnerPagesGuard implements CanActivate {
constructor(
public authenticationService: AuthenticationService,
public router: Router
) { }
canActivate(
next: ActivatedRouteSnapshot,
state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
if (this.authenticationService.currentUserValue) {
// window.alert('You are not allowed to access this URL!');
this.router.navigate(['content'])
}
return false;
}
}
