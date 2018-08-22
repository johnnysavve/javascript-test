const expect = require('expect.js');
const practice = require('./practice');

describe('savve javascript test', function () {
  
  it('runs dummy test', function (done) {
    expect(practice.dummy()).to.eql(1);
    
    done();
  });

  it('runs reverse test', function (done) {
    const {reverse} = practice;
    const result1 = reverse([1,2,3]);
    const result2 = reverse([3,2,1]);

    expect(result1).to.eql([3,2,1]);
    expect(result2).to.eql([1,2,3]);

    done();
  });

  it('run stringReverse test', function (done) {
    const {stringReverse} = practice;
    const result1 = stringReverse('hello');
    const result2 = stringReverse('world');

    expect(result1).to.eql('olleh');
    expect(result2).to.eql('dlrow');

    done();
  });

  it('runs fibonacci test', function (done) {
    const {fibonacci} = practice;
    const result1 = fibonacci(3);
    const result2 = fibonacci(6);

    expect(result1).to.eql([1,1,2]);
    expect(result2).to.eql([1,1,2,3,5,8]);
    done();
  });

  it('runs biggest test', function (done) {
    const {biggest} = practice;
    const result1 = biggest([1,2,3,4,5]);
    const result2 = biggest([4,6,7,8,3,9,4,9]);

    expect(result1).to.eql(5);
    expect(result2).to.eql(9);

    done();
  });

  it('runs range test', function (done) {
    const {range} = practice;
    const result1 = range(0,5);
    const result2 = range(99,101);

    expect(result1).to.eql([0,1,2,3,4]);
    expect(result2).to.eql([99,100]);

    done();
  });

  it('runs flatten test', function (done) {
    const {flatten} = practice;
    const result1 = flatten([1,2,3,4,5]);
    const result2 = flatten([1,[2,[3,[4,[5]]]]]);

    expect(result1).to.eql([1,2,3,4,5]);
    expect(result2).to.eql([1,2,3,4,5]);

    done();
  });
});