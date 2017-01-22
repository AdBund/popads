import Campaign from './lib/campaign';
import Report from './lib/report';

export default class PopAds {
  constructor(apiKey) {
    this.campaign = new Campaign(apiKey);
    this.report = new Report(apiKey);
  }
}
