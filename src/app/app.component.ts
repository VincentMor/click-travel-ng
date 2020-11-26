import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClickTravelService } from './click-travel';
import { IDestination } from './Interfaces/IDestination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Choose your dream destination...';
  subscription: Subscription;
  destinations: IDestination[];

  constructor(private destinationService: ClickTravelService){}

  ngOnInit(): void {
    this.subscription = this.destinationService.getAll().subscribe(res => {this.destinations = res; console.log(this.destinations);});
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }

}
