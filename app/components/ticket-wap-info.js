import Component from '@ember/component';
import { computed } from '@ember/object';



import { tagName } from '@ember-decorators/component';
import { fadeOut, fadeIn } from 'ember-animated/motions/opacity';

@tagName('')
export default class TicketWapInfoComponent extends Component {
  ticketingInfo = null;
  ticketPackage = null;
  person = null;
  ticket = null;
  wap = null;
  setTicketStatus = null;
  toggleCard = null;
  nextSection = null;
  showing = null;

  @computed('ticket.{type,status}')
  get isStaffCredentialBanked() {
    const ticket = this.ticket;

    return (ticket && ticket.type == 'staff_credential' && ticket.status == 'banked');
  }

  @computed('ticket.{type,status}')
  get usingStaffCredential() {
    const ticket = this.ticket;

    return (ticket && ticket.type == 'staff_credential' && (ticket.status == 'claimed' || ticket.status == 'submitted'));
  }

  * transition({ insertedSprites, removedSprites }) { // eslint-disable-line require-yield
    insertedSprites.forEach(fadeIn);
    removedSprites.forEach(fadeOut);
  }
}
