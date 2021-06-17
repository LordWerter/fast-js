
declare let before: any;
declare let after: any;


import CHAI =  require('chai');
import chromeLauncher = require('chrome-launcher');
import fs = require('fs');
import glob = require('glob');
import lighthouse = require('lighthouse');
import path = require('path');

const REPORT_PATH = './scripts/lighthouse/report';

let SCOREs: any = {};

try {
  SCOREs = JSON.parse(
      fs.readFileSync(
          `${REPORT_PATH}/../scores.json`,
          'utf8',
      ),
  );
} catch (e) {
  SCOREs = {};
}

const URLs = glob.sync('./src/pages/**/index.tsx').map((v: string) => {
  return 'https://localhost:3000' + (
      v
      .replace('./src/pages/', '/')
      .replace('/index.tsx', '/')
  );
});

const opts = {
  chromeFlags: ['--show-paint-rects'],
  port: 3444,
};

describe('LightHouse', () => {
  let chrome: any;

  before((done) => {
    chromeLauncher
    .launch(opts)
    .then((c: any) => {
      chrome = c;

      opts.port = c.port;

      done();
    })
    .catch(done);
  });

  after((done) => {
    chrome
    .kill()
    .then(() => {
      done();
    })
    .catch(done);

    fs.writeFileSync(
        path.resolve(`${REPORT_PATH}/../scores.json`),
        JSON.stringify(SCOREs),
    );
  });

  URLs.forEach((url: string) => {
    it(url, (done) => {
      lighthouse(url, opts, null)
      .then((result: any) => {
        const score = result.reportCategories.reduce((a: number, v: any) => {
					return a + v.score;
				}, 0) / result.reportCategories.length;

        if (SCOREs[url]) {
          CHAI.expect(score).to.be.at.least(SCOREs[url]);
        } else {
          CHAI.expect(score).to.be.at.least(90);
        }
        SCOREs[url] = score;

        done();
      })
      .catch(done);
    }).timeout(60 * 1000);
  });
});
