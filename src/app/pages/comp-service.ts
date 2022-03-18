import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, Subject, throwError } from "rxjs";

@Injectable()
export class CompService {

    constructor(private readonly http: HttpClient) {

    }

    public comunicacaoHorizontalEvent = new Subject();

    get<T>(url: string, params?: object): Observable<T> {
        return this.http.get<T>(url, params).pipe();
    }

    post<T>(url: string, body: any, params?: object,): Observable<T> {
        return this.http.post<T>(url, body, params).pipe();
    }
}