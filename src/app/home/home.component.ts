import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClickTravelService } from '../click-travel';
import { IDestination } from '../Interfaces/IDestination';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {
  title = 'Choose your dream destination...';
  subscription: Subscription;
  destinations: IDestination[];

  constructor(private destinationService: ClickTravelService){}

  ngOnInit(): void {
    this.subscription = this.destinationService.getAll().subscribe(res => this.destinations = res);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }

}
