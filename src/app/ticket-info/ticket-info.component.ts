import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ClickTravelService } from '../click-travel';
import { ITicket } from '../Interfaces/ITicket';

@Component({
  selector: 'app-ticket-info',
  templateUrl: './ticket-info.component.html',
  styleUrls: ['./ticket-info.component.scss']
})
export class TicketInfoComponent implements OnInit {
  id: number;
  paramSub: Subscription;
  ticketSub: Subscription;
  ticket: ITicket;
  title: string ;
  constructor(private route: ActivatedRoute,private service: ClickTravelService) { }

  ngOnInit(): void {
  this.paramSub = this.route.params.subscribe(params => {
       this.id = +params['id'];
    });
    this.ticketSub = this.service.getTicket(this.id).subscribe(res => this.ticket = res);
  }

  ngOnDestroy() {
    this.paramSub.unsubscribe();
    this.ticketSub.unsubscribe();
  }
}
