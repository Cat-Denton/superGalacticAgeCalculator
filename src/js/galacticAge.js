export default class GalacticAge {
  constructor(name,age,lifeExpectancy) {
    this.name = name;
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
  };

  mercuryAge() {
    return Math.floor(this.age/.24);
  };
};