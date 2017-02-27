import request from '../utils/request';
import Base from './base';

export default class Campaign extends Base {
  getAll() {
    let url = `${this.baseUrl}/api/campaign_list`;
    let p = request.get(url).query({key: this.apiKey}).set('Accept', 'application/json').end();
    return p.then(res => res.body);
  }

  start({campaign_id}) {
    let url = `${this.baseUrl}/api/campaign_start`;
    let p = request.post(url).query({
      key: this.apiKey,
      campaign_id
    }).set('Accept', 'application/json').end();
    return p.then(res => res.body);
  }

  pause({campaign_id}) {
    let url = `${this.baseUrl}/api/campaign_pause`;
    let p = request.post(url).query({
      key: this.apiKey,
      campaign_id
    }).set('Accept', 'application/json').end();
    return p.then(res => res.body);
  }

}
