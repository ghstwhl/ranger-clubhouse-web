import Route from '@ember/routing/route';
import MeRouteMixin from 'clubhouse/mixins/route/me';
import RSVP from 'rsvp';
import requestYear from 'clubhouse/utils/request-year';

export default class MeRangerInfoRoute extends Route.extend(MeRouteMixin) {
  queryParams = {
    year: { refreshModel: true }
  };

  model(params) {
    const person_id = this.session.userId;
    const year = requestYear(params);

    return RSVP.hash({
      eventInfo: this.ajax.request(`person/${person_id}/event-info`, { data: { year } })
                .then((result) => { return result.event_info; }),
      personPositions: this.ajax.request(`person/${person_id}/positions`).then((results) => results.positions),
      year,
    });
  }

  setupController(controller, model) {
    super.setupController(...arguments);
    controller.set('eventInfo', model.eventInfo);
    controller.set('personPositions', model.personPositions);
    controller.set('year', model.year);
  }

  resetController(controller, isExiting) {
    if (isExiting) {
      controller.set('year', null);
    }
  }
}
