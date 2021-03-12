export default class GalacticAge {
  constructor(name,age,lifeExpectancy) {
    this.name = name;
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
  };

  mercuryAge() {
    return Math.floor(this.age/.24);
  };

  venusAge() {
    return Math.floor(this.age/.62);
  };

  marsAge() {
    return Math.floor(this.age/1.88);
  };

  jupiterAge() {
    return Math.floor(this.age/11.86);
  };
};