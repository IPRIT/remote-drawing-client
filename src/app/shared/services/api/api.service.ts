import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs";
import { Http, URLSearchParams } from "@angular/http";
import { Presentation } from "./models/presentation";

export const API_PROTOCOL = 'http';
export const API_HOST = 'localhost:9000';

@Injectable()
export class ApiService {

  constructor(
    private http: Http
  ) {
  }

  createPresentation(): Promise<Presentation> {
    return this._post('/presentations')
      .toPromise()
      .then(res => res.json());
  }

  getPresentation(id: string | number): Observable<Presentation> {
    return this._get(`/presentations/${id}`)
      .map(res => res.json());
  }

  updatePresentation(id, data): Promise<Presentation> {
    return this._post(`/presentations/${id}`, data)
      .toPromise()
      .then(res => res.json());
  }

  getQrCode(id): Promise<any> {
    return this._get(`/presentations/${id}/qr`)
      .toPromise()
      .then(res => res.json());
  }

  _buildApiEndpoint(path: string): string {
    if (!path.startsWith('/')) {
      path = '/' + path;
    }
    return `${API_PROTOCOL}://${API_HOST}/api${path}`;
  }

  _get(path: string, qs: any = {}): Observable<any> {
    let endpoint = this._buildApiEndpoint( path );
    let search = new URLSearchParams();
    for (let qsKey in qs) {
      search.set(qsKey, qs[qsKey]);
    }
    return this.http.get(endpoint, { search });
  }

  _post(path: string, data: any = {}): Observable<any> {
    let endpoint = this._buildApiEndpoint( path );
    return this.http.post(endpoint, data);
  }
}