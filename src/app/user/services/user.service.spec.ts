// Other imports
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

// Http testing module and mocking controller
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { User } from '../model/user';
import { UserService } from './user.service';
import { HttpErrorHandler } from '../../shared/services/http-error-handler.service';
import { MessageService } from '../../shared/services/message.service';

// TODO: Remove f before describe to run all test cases later.
fdescribe('UserService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ UserService, HttpErrorHandler, MessageService ]
    });

    // Inject the http service and test controller for each test
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    userService = TestBed.get(UserService);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  describe('#getUsers', () => {
    let expectedUsers: User[];

    beforeEach(() => {
      userService = TestBed.get(UserService);
      expectedUsers = [
        {
          id: 1,
          name: 'Test1',
          username: 'Test1',
          email: 'test@gmail.com',
          address: {
            street: 'Test street',
            suite: 'Apt. Test1',
            city: 'Testing',
            zipcode: '8881212',
            geo: {
              lat: -37.3159,
              lng: 81.1496
            }
          },
          phone: 1 - 770 - 736 - 8031,
          website: 'wwf.com',
          company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets'
          }
        },
        {
          id: 2,
          name: 'Test2',
          username: 'Test2',
          email: 'test2@gmail.com',
          address: {
            street: 'Test2 street',
            suite: 'Apt. Test2',
            city: 'Testing2',
            zipcode: '8881212',
            geo: {
              lat: -33.3159,
              lng: 82.1496
            }
          },
          phone: 1 - 771 - 726 - 8031,
          website: 'wwf2.com',
          company: {
            name: 'Romaguera',
            catchPhrase: 'Single Layered client-server neural-net',
            bs: 'careness for realtime markets'
          }
        }
       ] as User[];
    });

    it('should return expected users (called once)', () => {

      userService.getUsers().subscribe(
        users => expect(users).toEqual(expectedUsers, 'should return expected users'),
        fail
      );

      // UserService should have made one request to GET users from expected URL
      const req = httpTestingController.expectOne(userService.url);
      expect(req.request.method).toEqual('GET');

      // Respond with the mock users
      req.flush(expectedUsers);
    });

    it('should be OK returning no users', () => {

      userService.getUsers().subscribe(
        users => expect(users.length).toEqual(0, 'should have empty users array'),
        fail
      );

      const req = httpTestingController.expectOne(userService.url);
      req.flush([]); // Respond with no users
    });

    // This service reports the error but finds a way to let the app keep going.
    it('should turn 404 into an empty users result', () => {

      userService.getUsers().subscribe(
        users => expect(users.length).toEqual(0, 'should return empty users array'),
        fail
      );

      const req = httpTestingController.expectOne(userService.url);

      // respond with a 404 and the error message in the body
      const msg = 'deliberate 404 error';
      req.flush(msg, {status: 404, statusText: 'Not Found'});
    });

    it('should return expected users (called multiple times)', () => {

      userService.getUsers().subscribe();
      userService.getUsers().subscribe();
      userService.getUsers().subscribe(
        users => expect(users).toEqual(expectedUsers, 'should return expected users'),
        fail
      );

      const requests = httpTestingController.match(userService.url);
      expect(requests.length).toEqual(3, 'calls to getUsers()');

      // Respond to each request with different mock user results
      requests[0].flush([]);
      requests[1].flush([{id: 1, name: 'bob'}]);
      requests[2].flush(expectedUsers);
    });

  });

});
