/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Division } from '../models/division';

@Injectable({
  providedIn: 'root',
})
export class DivisionsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiDivisionsGet
   */
  static readonly ApiDivisionsGetPath = '/api/Divisions';

  /**
   * Возвращает список подразделений предприятия.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDivisionsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDivisionsGet$Response(params?: {

  }): Observable<StrictHttpResponse<Array<Division>>> {

    const rb = new RequestBuilder(this.rootUrl, DivisionsService.ApiDivisionsGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Division>>;
      })
    );
  }

  /**
   * Возвращает список подразделений предприятия.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiDivisionsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDivisionsGet(params?: {

  }): Observable<Array<Division>> {

    return this.apiDivisionsGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Division>>) => r.body as Array<Division>)
    );
  }

  /**
   * Path part for operation apiDivisionsPost
   */
  static readonly ApiDivisionsPostPath = '/api/Divisions';

  /**
   * Создает подразделение.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDivisionsPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDivisionsPost$Response(params?: {
      body?: Division
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DivisionsService.ApiDivisionsPostPath, 'post');
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
   * Создает подразделение.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiDivisionsPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDivisionsPost(params?: {
      body?: Division
  }): Observable<void> {

    return this.apiDivisionsPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiDivisionsIdGet
   */
  static readonly ApiDivisionsIdGetPath = '/api/Divisions/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDivisionsIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDivisionsIdGet$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DivisionsService.ApiDivisionsIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiDivisionsIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDivisionsIdGet(params: {
    id: number;

  }): Observable<void> {

    return this.apiDivisionsIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiDivisionsIdPut
   */
  static readonly ApiDivisionsIdPutPath = '/api/Divisions/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDivisionsIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDivisionsIdPut$Response(params: {
    id: number;
      body?: Division
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DivisionsService.ApiDivisionsIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiDivisionsIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDivisionsIdPut(params: {
    id: number;
      body?: Division
  }): Observable<void> {

    return this.apiDivisionsIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiDivisionsIdDelete
   */
  static readonly ApiDivisionsIdDeletePath = '/api/Divisions/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDivisionsIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDivisionsIdDelete$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DivisionsService.ApiDivisionsIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiDivisionsIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDivisionsIdDelete(params: {
    id: number;

  }): Observable<void> {

    return this.apiDivisionsIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
