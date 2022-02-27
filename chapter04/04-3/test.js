import { Province, sampleProvinceData } from './index.js';
import assert from 'assert';

describe('province', function () {
  it('shortfall', function () {
    // 1. 픽스처 설정
    const asia = new Province(sampleProvinceData());

    // 2. 검증
    assert.equal(asia.shortfall, 5);
  });
});
