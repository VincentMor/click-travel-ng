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
        return this.http.get<ITicket[]>(`https://travel-api.clicksomeone.com/tickets?filter=%7B%0A%20%20%22where%22%3A%20%7B%20%22to%22%3A%20%22${code}%22%20%7D%0A%7D`).pipe();
    }

    getTicket(idTicket: number): Observable<ITicket>{
        return this.http.get<ITicket>(this.ticketsUrl+idTicket).pipe();
    }
}