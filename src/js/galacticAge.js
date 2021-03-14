export default class GalacticAge {
  constructor(name,age,lifeExpectancy) {
    this.name = name;
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
    this.mercuryDiv = .24;
    this.venusDiv = .62;
    this.marsDiv = 1.88;
    this.jupiterDiv = 11.86;
  };

  mercuryAge() {
    return Math.floor(this.age/this.mercuryDiv);
  };

  venusAge() {
    return Math.floor(this.age/this.venusDiv);
  };

  marsAge() {
    return Math.floor(this.age/this.marsDiv);
  };

  jupiterAge() {
    return Math.floor(this.age/this.jupiterDiv);
  };

  yearsToLiveMerc() {
    return Math.floor(this.lifeExpectancy/this.mercuryDiv)-Math.floor(this.age/this.mercuryDiv);
  };

  yearsToLiveVenus() {
    return Math.floor(this.lifeExpectancy/this.venusDiv)-Math.floor(this.age/this.venusDiv);
  };

  yearsToLiveMars() {
    return Math.floor(this.lifeExpectancy/this.marsDiv)-Math.floor(this.age/this.marsDiv);
  };

  yearsToLiveJupiter() {
    return Math.floor(this.lifeExpectancy/this.jupiterDiv)-Math.floor(this.age/this.jupiterDiv);
  };
};