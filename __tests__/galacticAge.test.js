import { TestScheduler } from 'jest'
import GalacticAge from './../src/js/GalacticAge.js'

describe('GalacticAge', () => {

  let user;

  beforeEach(() => {
    user = new GalacticAge("Cat",41,73);
  });

  test('The user object should have \"Cat\" stored in the name property', () => {
    expect(user.name).toEqual("Cat");
  });

  test('The user object should have 41 stored in the age property', () => {
    expect(user.age).toEqual(41);
  });

  test('The user object should have 73 stored in the lifeExpectancy property', () => {
    expect(user.lifeExpectancy).toEqual(73);
  });

  test('It should return the user age in mercury years', () => {
    expect(user.mercuryAge()).toEqual(170);
  });

  test('It should return the user age in Venus years', () => {
    expect(user.venusAge()).toEqual(66);
  });

  test('It should return the user age in Mars years', () => {
    expect(user.marsAge()).toEqual(21);
  });

  test('It should return user age in Jupiter years', () => {
    expect(user.jupiterAge()).toEqual(3);
  });

  test('It should return expected time to live in Mercury years', () => {
    expect(user.yearsToLiveMerc()).toEqual(134);
  });

  test('It should return expected time to live in Venus years', () => {
    expect(user.yearsToLiveVenus()).toEqual(51);
  });

  test('It should return expected time to live in Mars years', () => {
    expect(user.yearsToLiveMars()).toEqual(17);
  });

  test('It should return expected time to live in Jupiter years', () => {
    expect(user.yearsToLiveJupiter()).toEqual(3);
  });
});