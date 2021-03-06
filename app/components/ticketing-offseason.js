import Component from '@ember/component';

import { computed } from '@ember/object';

export default class TicketingOffseasonComponent extends Component {
  ticketingInfo = null;
  ticketPackage = null;
  person = null;

  @computed('ticketPackage.tickets')
  get bankedTickets() {
    return this.ticketPackage.tickets.filter((ticket) => (ticket.status == 'banked' || ticket.status == 'qualified'));
  }
}
