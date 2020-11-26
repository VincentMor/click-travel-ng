import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ClickTravelService } from '../click-travel';
import { ITicket } from '../Interfaces/ITicket';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit, OnDestroy {
  code: string;
  paramSub: Subscription;
  ticketSub: Subscription;
  tickets: ITicket[]
  title: string ;
  constructor(private route: ActivatedRoute,private service: ClickTravelService) { }

  ngOnInit(): void {
  this.paramSub = this.route.params.subscribe(params => {
       this.code = params['code'];
       this.title = `Tickets to ${this.code}`
    });
    this.ticketSub = this.service.getTickets(this.code).subscribe(res => this.tickets = res);
  }

  ngOnDestroy() {
    this.paramSub.unsubscribe();
    this.ticketSub.unsubscribe();
  }

}
