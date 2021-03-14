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
    const yearsToLiveMerc = Math.floor(this.lifeExpectancy/this.mercuryDiv)-Math.floor(this.age/this.mercuryDiv);
    // if (yearsToLiveMerc >= 0) {
      return `You have ${yearsToLiveMerc} years to live on Mercury.`
    // } else {
    //   x = Math.abs(yearsToLiveMerc);
    //   return `You should have died ${x} years ago on Mercury!`
    // }
  };

  yearsToLiveVenus() {
    const yearsToLiveVenus = Math.floor(this.lifeExpectancy/this.venusDiv)-Math.floor(this.age/this.venusDiv);

    return `You have ${yearsToLiveVenus} years to live on Venus.`
  };

  yearsToLiveMars() {
    const yearsToLiveMars = Math.floor(this.lifeExpectancy/this.marsDiv)-Math.floor(this.age/this.marsDiv);

    return `You have ${yearsToLiveMars} years to live on Mars.`
  };

  yearsToLiveJupiter() {
    const yearsToLiveJupiter = Math.floor(this.lifeExpectancy/this.jupiterDiv)-Math.floor(this.age/this.jupiterDiv);

    return `You have ${yearsToLiveJupiter} years to live on Jupiter.`
  };
};