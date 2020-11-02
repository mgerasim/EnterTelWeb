/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Account } from '../models/account';
import { Employee } from '../models/employee';
import { EmployeeDomain } from '../models/employee-domain';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiEmployeesGet
   */
  static readonly ApiEmployeesGetPath = '/api/Employees';

  /**
   * Возвращает список сотрудников.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEmployeesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmployeesGet$Response(params?: {

  }): Observable<StrictHttpResponse<Array<EmployeeDomain>>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeesService.ApiEmployeesGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<EmployeeDomain>>;
      })
    );
  }

  /**
   * Возвращает список сотрудников.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiEmployeesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmployeesGet(params?: {

  }): Observable<Array<EmployeeDomain>> {

    return this.apiEmployeesGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<EmployeeDomain>>) => r.body as Array<EmployeeDomain>)
    );
  }

  /**
   * Path part for operation apiEmployeesPost
   */
  static readonly ApiEmployeesPostPath = '/api/Employees';

  /**
   * Создает сотрудника.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEmployeesPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEmployeesPost$Response(params?: {
      body?: Employee
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeesService.ApiEmployeesPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Создает сотрудника.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiEmployeesPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEmployeesPost(params?: {
      body?: Employee
  }): Observable<void> {

    return this.apiEmployeesPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiEmployeesDivisionGet
   */
  static readonly ApiEmployeesDivisionGetPath = '/api/Employees/division';

  /**
   * Возвращает список сотрудников по подразделению.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEmployeesDivisionGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmployeesDivisionGet$Response(params?: {
    divisionId?: number;

  }): Observable<StrictHttpResponse<Array<EmployeeDomain>>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeesService.ApiEmployeesDivisionGetPath, 'get');
    if (params) {

      rb.query('divisionId', params.divisionId, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<EmployeeDomain>>;
      })
    );
  }

  /**
   * Возвращает список сотрудников по подразделению.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiEmployeesDivisionGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmployeesDivisionGet(params?: {
    divisionId?: number;

  }): Observable<Array<EmployeeDomain>> {

    return this.apiEmployeesDivisionGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<EmployeeDomain>>) => r.body as Array<EmployeeDomain>)
    );
  }

  /**
   * Path part for operation apiEmployeesSearchGet
   */
  static readonly ApiEmployeesSearchGetPath = '/api/Employees/search';

  /**
   * Возвращает список сотрудников по строке поиска.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEmployeesSearchGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmployeesSearchGet$Response(params?: {
    search?: null | string;

  }): Observable<StrictHttpResponse<Array<EmployeeDomain>>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeesService.ApiEmployeesSearchGetPath, 'get');
    if (params) {

      rb.query('search', params.search, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<EmployeeDomain>>;
      })
    );
  }

  /**
   * Возвращает список сотрудников по строке поиска.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiEmployeesSearchGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmployeesSearchGet(params?: {
    search?: null | string;

  }): Observable<Array<EmployeeDomain>> {

    return this.apiEmployeesSearchGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<EmployeeDomain>>) => r.body as Array<EmployeeDomain>)
    );
  }

  /**
   * Path part for operation apiEmployeesIdGet
   */
  static readonly ApiEmployeesIdGetPath = '/api/Employees/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEmployeesIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmployeesIdGet$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<Employee>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeesService.ApiEmployeesIdGetPath, 'get');
    if (params) {

      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Employee>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiEmployeesIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmployeesIdGet(params: {
    id: number;

  }): Observable<Employee> {

    return this.apiEmployeesIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<Employee>) => r.body as Employee)
    );
  }

  /**
   * Path part for operation apiEmployeesIdPut
   */
  static readonly ApiEmployeesIdPutPath = '/api/Employees/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEmployeesIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEmployeesIdPut$Response(params: {
    id: number;
      body?: Employee
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeesService.ApiEmployeesIdPutPath, 'put');
    if (params) {

      rb.path('id', params.id, {});

      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiEmployeesIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEmployeesIdPut(params: {
    id: number;
      body?: Employee
  }): Observable<void> {

    return this.apiEmployeesIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiEmployeesIdDelete
   */
  static readonly ApiEmployeesIdDeletePath = '/api/Employees/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEmployeesIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmployeesIdDelete$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeesService.ApiEmployeesIdDeletePath, 'delete');
    if (params) {

      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiEmployeesIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmployeesIdDelete(params: {
    id: number;

  }): Observable<void> {

    return this.apiEmployeesIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiEmployeesAccountGet
   */
  static readonly ApiEmployeesAccountGetPath = '/api/Employees/Account';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEmployeesAccountGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmployeesAccountGet$Response(params?: {
    id?: number;

  }): Observable<StrictHttpResponse<Account>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeesService.ApiEmployeesAccountGetPath, 'get');
    if (params) {

      rb.query('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Account>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiEmployeesAccountGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEmployeesAccountGet(params?: {
    id?: number;

  }): Observable<Account> {

    return this.apiEmployeesAccountGet$Response(params).pipe(
      map((r: StrictHttpResponse<Account>) => r.body as Account)
    );
  }

  /**
   * Path part for operation apiEmployeesAccountPost
   */
  static readonly ApiEmployeesAccountPostPath = '/api/Employees/Account';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEmployeesAccountPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEmployeesAccountPost$Response(params?: {
      body?: Account
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeesService.ApiEmployeesAccountPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiEmployeesAccountPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEmployeesAccountPost(params?: {
      body?: Account
  }): Observable<void> {

    return this.apiEmployeesAccountPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
