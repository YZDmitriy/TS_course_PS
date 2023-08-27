class Vehicle {
  public make: string;
  private damages: string[];
  private _model: string;
  protected run: number;
  #price: number; // private

  set model(model: string) {
    this._model = model;
    this.#price = 100;
  }

  get model() {
    return this._model;
  }

  isPriceEqual(v: Vehicle) {
    return this.#price === v.#price;
  }

  addDamages(damage: string) {
    this.damages.push(damage);
  }
}

new Vehicle().make = 'BMW';

// new Vehicle().damages = ['engine']; // ! error
new Vehicle().addDamages('engine');

// new Vehicle().run = 10 // ! error

//----------------------------------//

class EuroTruck extends Vehicle {
  setDamages() {
    //...
  }

  setRun(km: number) {
    this.run = km * 0.62; // protected
    // this.damages //  private
  }
}
