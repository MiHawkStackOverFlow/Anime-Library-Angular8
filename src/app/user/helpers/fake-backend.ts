import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

import { User } from '../model/user';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // create an array of anime website users
        const users: User[] = [ { id: 1, email: 'admin@angular.com', username: "Admin", name: "Abhishek" } ];
        const authHeader    = request.headers.get('Authorization');
        const isLoggedIn    = authHeader && authHeader.startsWith('Bearer fake-jwt-token');

        // private helper functions
        
        function ok(body) {
          return of(new HttpResponse({ status: 200, body }));
        }

        function unauthorized() {
          return throwError({ status: 400, error: { message: 'Unauthorized' } });
        }

        function error(message) {
            return throwError({ status: 400, error: { message } }); 
        }
        
        return of(null).pipe(mergeMap(() => {

            // check request details with users in database and return error or user data
            if(request.url.endsWith('/users/authenticate') && request.method == 'POST') {
                const user = users.find(x => x.email === request.body.email && x.password === request.body.password);
                if(!user) return error('Email or password is incorrect');
                return ok({
                    id: user.id,
                    email: user.email,
                    username: user.username,
                    name: user.name,
                    token: 'fake-jwt-token'   
                });
            }

            // get all users
            if(request.url.endsWith('/users') && request.method === 'GET') {
                if(!isLoggedIn) return unauthorized();
                return ok(users);
            }
            
            // pass through any request not handled above
            return next.handle(request);  
        }));
    }
}