class Thermostat {
  constructor(fTemp) {
    this._temperature = 5/9 * (fTemp - 32);
  }

  get temperature() {
    return this._temperature; 
  }

  set temperature(newTemp) {
    this._temperature = newTemp;
  }
}

