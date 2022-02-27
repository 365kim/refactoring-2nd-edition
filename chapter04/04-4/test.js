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
});
