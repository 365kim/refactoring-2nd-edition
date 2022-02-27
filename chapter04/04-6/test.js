import { Province, sampleProvinceData } from './index.js';
import assert from 'assert';

describe('province', function () {
  let asia;
  beforeEach(function () {
    asia = new Province(sampleProvinceData());
  });

  it('shortfall', function () {
    assert.equal(asia.shortfall, 5);
  });

  it('profit', function () {
    assert.equal(asia.profit, 230);
  });

  it('change production', function () {
    asia.producers[0].production = 20;

    assert.equal(asia.shortfall, -6);
    assert.equal(asia.profit, 292);
  });

  it('zero demand', function () {
    asia.demand = 0;
    assert.equal(asia.shortfall, -25);
    assert.equal(asia.profit, 0);
  });

  it('negative demand', function () {
    asia.demand = -1;
    assert.equal(asia.shortfall, -26);
    assert.equal(asia.profit, 0);
  });

});

describe('no producers', function () {
  let noProducers;
  beforeEach(function () {
    const data = {
      name: 'No producers',
      producers: [],
      demand: 30,
      price: 20,
    };
    noProducers = new Province(data);
  });
  it('shortfall', function () {
    assert.equal(noProducers.shortfall, 30);
  });

  it('profit', function () {
    assert.equal(noProducers.profit, 0);
  });
});
