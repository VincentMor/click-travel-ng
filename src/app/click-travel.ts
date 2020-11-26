import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
import { IDestination } from './Interfaces/IDestination';
import { ITicket } from './Interfaces/ITicket';


@Injectable({
    providedIn: 'root',
})
export class ClickTravelService {
    destinationUrl="https://travel-api.clicksomeone.com/destinations";
    ticketsUrl="https://travel-api.clicksomeone.com/tickets";
    constructor(private http: HttpClient) { 
    }

    getAll(): Observable<IDestination[]>{
        return this.http.get<IDestination[]>(this.destinationUrl).pipe(map(item => item.filter(value => value.isDreamDestination)));
    }

    getTickets(code: string): Observable<ITicket[]>{
        var param = new HttpParams();
        param.set('filter',`{"where":{ "to": "${code}"`);
        const httpOption = {
            params: param
        };
        return this.http.get<ITicket[]>(this.ticketsUrl,httpOption).pipe();
    }
}