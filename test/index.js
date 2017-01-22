import {expect} from 'chai';
import PA from '../src';

let {apiKey} = process.env;

describe('PopAds', () => {

  it ('apiKey should exist', () => {
    expect(apiKey).to.be.a('string');
  })

  let pa = new PA(apiKey);

  describe('campaign', () => {

// sample campaign
// { id: '3987679',
//   status: 'out_of_money',
//   aux_status: 'paused',
//   group_id: null,
//   name: '265-IT-Showgirl-cd-popads-devin-10.14',
//   budget: '0.009202063083648682',
//   url: [Object],
//   created: '2016-10-14 08:56:10' },

    it ('getAll', (done) => {
      pa.campaign.getAll().then((data) => {
        expect(data.campaigns).to.be.an('array');
        console.log(data.campaigns);
        done();
      });
    })
  })


  describe('report', () => {

    it ('publisher', (done) => {
      pa.report.publisher().then((report) => {
        expect(report.mode).to.equal('publisher');
        expect(report.rows).to.be.an('array');
        console.log(report);
        done();
      })
    })

    it ('advertiser', (done) => {
      pa.report.advertiser().then((report) => {
        expect(report.mode).to.equal('advertiser');
        expect(report.rows).to.be.an('array');
        console.log(report);
        done();
      })
    })
  })
})
