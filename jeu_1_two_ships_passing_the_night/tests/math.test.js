import assert from 'assert';
import { lerp, mapLinear, randFloatSpread, clamp, randFloat } from '../src/math.js';

describe('math.js', () => {
    //tests unitaires
  it('randFloatSpread(1) <= 1 returns true', () => {
    assert.ok(randFloatSpread(1) <= 1);
  });

  it('randFloatSpread(1) >= -1 retourne true', () => {
    assert.ok(randFloatSpread(1) >= -1);
  });

  it('mapLinear(1,2,3,4,5) returns 3', () => {
    assert.strictEqual(mapLinear(1,2,3,4,5), 3)
  });

  it('mapLinear(1,20,3,40,5) returns 0.882...', () => {
    assert.strictEqual(mapLinear(1, 20, 3, 40, 5), 0.882352941176471);
  });

  it('lerp(1,3,20) returns 41', () => {
    assert.strictEqual(lerp(1, 3, 20), 41);
  });

  it('lerp(1.3,-7,2) returns -15.3', () => {
    assert.strictEqual(lerp(1.3, -7, 2), -15.3);
  });

  //tests inventés
  it('randFloatSpread(60) <= 60 returns true', () => {
    assert.ok(randFloatSpread(60) <= 60);
  });

  it('clamp(5, 1, 10) returns 5', () => {
    assert.strictEqual(clamp(5, 1, 10), 5);
  });

  it('clamp(-5, 1, 10) returns 1', () => {
    assert.strictEqual(clamp(-5, 1, 10), 1);
  });

  it('randFloat(0, 1) >= 0 returns true', () => {
    assert.ok(randFloat(0,1) >= 0);
  });
  
  it('randFloat(0, 1) <= 1 returns true', () => {
    assert.ok(randFloat(0,1) <= 1);
  });
});