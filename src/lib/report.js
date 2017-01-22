import request from '../utils/request';
import Base from './base';

export default class Report extends Base {

  publisher(options = {}) {
    let url = `${this.baseUrl}/api/report_publisher`;

    let p = request.post(url)
                   .query({key: this.apiKey})
                   .send(options)
                   .set('Accept', 'application/json')
                   .end();

    return p.then(res => res.body);
  }

  advertiser(options = {}) {
    let url = `${this.baseUrl}/api/report_advertiser`;

    let p = request.post(url)
                   .query({key: this.apiKey})
                   .send(options)
                   .set('Accept', 'application/json')
                   .end();

    return p.then(res => res.body);
  }
}
