const sinon = require('sinon')

describe('index.js', function () {
  this.timeout(0)
  const drivers = [
    { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
    { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
    { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
    { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
    { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
  ];

  const driversCopy = [...drivers];

  afterEach(function () {
    this.timeout(0)
    expect(drivers, 'MAKE SURE YOUR ARRAY MANIPULATIONS ARE NON-DESTRUCTIVE').to.eql(driversCopy);
  });

  describe('logDriverNames()', function () {
    this.timeout(0)
    let spy;

    beforeEach(function () {
      this.timeout(0)
      spy = sinon.spy(console, 'log');
    });

    afterEach(function () {
      this.timeout(0)
      spy.restore();
    });

    it('logs the name of each driver', function () {
      this.timeout(0)
      logDriverNames(drivers);

      expect(spy.calledWithExactly('Bobby')).to.be.true;

      expect(spy.calledWithExactly('Sally')).to.be.true;

      expect(spy.calledWithExactly('Sammy')).to.be.true;

      expect(spy.calledWithExactly('Annette')).to.be.true;

      expect(spy.calledWithExactly('Bobby')).to.be.true;
    });
  });

  describe('logDriversByHometown()', function () {
    this.timeout(0)
    let spy;

    beforeEach(function () {
      this.timeout(0)
      spy = sinon.spy(console, 'log');
    });

    afterEach(function () {
      this.timeout(0)
      spy.restore();
    });

    it('logs the name of each driver whose hometown matches the passed-in argument', function () {
      this.timeout(0)
      logDriversByHometown(drivers, 'Pittsburgh');
      this.timeout(0)
      expect(spy.calledWithExactly('Bobby')).to.be.true;
      this.timeout(0)
      expect(spy.calledWithExactly('Sammy')).to.be.true;
      this.timeout(0)
      expect(spy.calledWithExactly('Annette')).to.not.be.true;
    });
  });
  
  describe('driversByRevenue()', function () {
    this.timeout(0)
    it('uses the sort() method to return a new array of drivers ordered by revenue (lowest to highest)', function () {
      expect(driversByRevenue(drivers)[0].name).to.eql('Sally');

      expect(driversByRevenue(drivers)[drivers.length - 1].name).to.eql('Annette');
    });
  });

  describe('driversByName()', function () {
    this.timeout(0)
    it('uses the sort() method to return a new array of drivers ordered alphabetically by name (A to Z)', function () {
      expect(driversByName(drivers)[0].name).to.eql('Annette');

      expect(driversByName(drivers)[drivers.length - 1].name).to.eql('Sammy');
    });
  });

  describe('totalRevenue()', function () {
    this.timeout(0)
    it('uses the reduce() method to sum the revenue of every driver and return the total', function () {
      expect(totalRevenue(drivers)).to.equal(18500);
    });
  });

  describe('averageRevenue()', function () {
    this.timeout(0)
    it('calculates the average revenue across all drivers', function () {
      expect(averageRevenue(drivers)).to.equal(3700);
    });
  });
});
