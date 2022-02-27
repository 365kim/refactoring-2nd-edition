import { Province, sampleProvinceData } from './index.js';
import assert from 'assert';

describe('province', function () {
  it('shortfall', function () {
    const asia = new Province(sampleProvinceData());

    assert.equal(asia.shortfall, 5);
  });
  it('profit', function () {
    const asia = new Province(sampleProvinceData());

    assert.equal(asia.profit, 230);
  });
});
