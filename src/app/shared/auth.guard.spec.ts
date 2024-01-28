import { TestBed } from '@angular/core/testing';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { AuthGuard } from './auth.guard';

class MockRouter {
  navigateByUrl(url: string) { return url; }
}

describe('AuthGuard', () => {
  let authGuard: AuthGuard;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: Router, useClass: MockRouter }
      ]
    });

    authGuard = TestBed.inject(AuthGuard);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(authGuard).toBeTruthy();
  });

  it('should return true if the user is authenticated', () => {
    spyOn(authGuard['authService'], 'isAuthenticated').and.returnValue(true);

    const canActivateResult = authGuard.canActivate({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot);

    expect(canActivateResult).toBe(true);
  });

  it('should return UrlTree to /login if the user is not authenticated', () => {
    spyOn(authGuard['authService'], 'isAuthenticated').and.returnValue(false);

    const canActivateResult = authGuard.canActivate({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot);

    expect(canActivateResult).toEqual(router.parseUrl('/login'));
  });
});
