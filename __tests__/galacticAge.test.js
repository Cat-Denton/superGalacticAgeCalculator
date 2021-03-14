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
    expect(user.mercuryAge()).toEqual('Your age on Mercury is 170 years.');
  });

  test('It should return the user age in Venus years', () => {
    expect(user.venusAge()).toEqual('Your age on Venus is 66 years.');
  });

  test('It should return the user age in Mars years', () => {
    expect(user.marsAge()).toEqual('Your age on Mars is 21 years.');
  });

  test('It should return user age in Jupiter years', () => {
    expect(user.jupiterAge()).toEqual('Your age on Jupiter is 3 years.');
  });

  test('It should return expected time to live in Mercury years', () => {
    expect(user.yearsToLiveMerc()).toEqual('You have 134 years to live on Mercury.');
  });

  test('It should return expected time to live in Venus years', () => {
    expect(user.yearsToLiveVenus()).toEqual('You have 51 years to live on Venus.');
  });

  test('It should return expected time to live in Mars years', () => {
    expect(user.yearsToLiveMars()).toEqual('You have 17 years to live on Mars.');
  });

  test('It should return expected time to live in Jupiter years', () => {
    expect(user.yearsToLiveJupiter()).toEqual('You have 3 years to live on Jupiter.');
  });
});