//ES6 Introduced the concept of class.
//A class is a function, but instead of using the keyword function to declare it we use the word class
//Class names starts with Capital letters.

//A simple class with constructor method
class Car {
  constructor(name) {
    this.name = name;
  }
}

//You can now create an object using the class Car
const myCar = new Car("Lemozi");
document.write(myCar.name); //Output: Lemozi

//Note: The constructor function is called automatically when the object is initialized.

