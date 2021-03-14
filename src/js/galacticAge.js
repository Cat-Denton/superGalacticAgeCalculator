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

  };

  yearsToLiveVenus() {

  };

  yearsToLiveMars() {

  };

  yearsToLiveJupiter() {

  };
};