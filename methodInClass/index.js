//A class Car with a constructor and a method present.
class Car {
  constructor(name) {
    this.brand = name;
  }

  present() {
    return "I have a " + this.brand;
  }
}

//Create an instance of the class Car
const myCar = new Car("Toyota");
document.write(myCar.present());
//Output: I have a Toyota
