import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
import { IDestination } from './Interfaces/IDestination';


@Injectable({
    providedIn: 'root',
})
export class ClickTravelService {
    destinationUrl="https://travel-api.clicksomeone.com/destinations"

    constructor(private http: HttpClient) { 
    }

    getAll(): Observable<IDestination[]>{
        return this.http.get<IDestination[]>(this.destinationUrl).pipe(map(item => item.filter(value => value.isDreamDestination)));
    }
}