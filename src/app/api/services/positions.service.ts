/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Position } from '../models/position';

@Injectable({
  providedIn: 'root',
})
export class PositionsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiPositionsGet
   */
  static readonly ApiPositionsGetPath = '/api/Positions';

  /**
   * Возвращает список всех должностей.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPositionsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPositionsGet$Response(params?: {

  }): Observable<StrictHttpResponse<Array<Position>>> {

    const rb = new RequestBuilder(this.rootUrl, PositionsService.ApiPositionsGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Position>>;
      })
    );
  }

  /**
   * Возвращает список всех должностей.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPositionsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPositionsGet(params?: {

  }): Observable<Array<Position>> {

    return this.apiPositionsGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Position>>) => r.body as Array<Position>)
    );
  }

  /**
   * Path part for operation apiPositionsPost
   */
  static readonly ApiPositionsPostPath = '/api/Positions';

  /**
   * Создает должность.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPositionsPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPositionsPost$Response(params?: {
      body?: Position
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PositionsService.ApiPositionsPostPath, 'post');
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
   * Создает должность.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPositionsPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPositionsPost(params?: {
      body?: Position
  }): Observable<void> {

    return this.apiPositionsPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiPositionsVacantGet
   */
  static readonly ApiPositionsVacantGetPath = '/api/Positions/vacant';

  /**
   * Возвращает список свободных должностей.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPositionsVacantGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPositionsVacantGet$Response(params?: {

  }): Observable<StrictHttpResponse<Array<Position>>> {

    const rb = new RequestBuilder(this.rootUrl, PositionsService.ApiPositionsVacantGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Position>>;
      })
    );
  }

  /**
   * Возвращает список свободных должностей.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPositionsVacantGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPositionsVacantGet(params?: {

  }): Observable<Array<Position>> {

    return this.apiPositionsVacantGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Position>>) => r.body as Array<Position>)
    );
  }

  /**
   * Path part for operation apiPositionsIdGet
   */
  static readonly ApiPositionsIdGetPath = '/api/Positions/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPositionsIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPositionsIdGet$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PositionsService.ApiPositionsIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiPositionsIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPositionsIdGet(params: {
    id: number;

  }): Observable<void> {

    return this.apiPositionsIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiPositionsIdPut
   */
  static readonly ApiPositionsIdPutPath = '/api/Positions/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPositionsIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPositionsIdPut$Response(params: {
    id: number;
      body?: Position
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PositionsService.ApiPositionsIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiPositionsIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPositionsIdPut(params: {
    id: number;
      body?: Position
  }): Observable<void> {

    return this.apiPositionsIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiPositionsIdDelete
   */
  static readonly ApiPositionsIdDeletePath = '/api/Positions/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPositionsIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPositionsIdDelete$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PositionsService.ApiPositionsIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiPositionsIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPositionsIdDelete(params: {
    id: number;

  }): Observable<void> {

    return this.apiPositionsIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
