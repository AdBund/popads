import request from '../utils/request';
import Base from './base';

export default class Campaign extends Base {
  getAll() {
    let url = `${this.baseUrl}/api/campaign_list`;
    let p = request.get(url).query({key: this.apiKey}).set('Accept', 'application/json').end();
    return p.then(res => res.body);
  }

}
