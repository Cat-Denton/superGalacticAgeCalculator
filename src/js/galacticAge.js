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
    const mercuryAge = Math.floor(this.age/this.mercuryDiv);
    return `Your age on Mercury is ${mercuryAge} years.`;
  };

  venusAge() {
    const venusAge = Math.floor(this.age/this.venusDiv);
    return `Your age on Venus is ${venusAge} years.`;
  };

  marsAge() {
    const marsAge = Math.floor(this.age/this.marsDiv);
    return `Your age on Mars is ${marsAge} years.`;
  };

  jupiterAge() {
    const jupiterAge = Math.floor(this.age/this.jupiterDiv);
    return `Your age on Jupiter is ${jupiterAge} years.`;
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