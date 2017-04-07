(function(){

  //backend

  class User {
    constructor(...args) {
      this.name = name;
      this.streetAddress = streetAddress;
      this.city = city;
      this.state = state;
      this.zipCode = zipCode;
    }
  }

  const price = function(pizza) {

  }

  class Pizza {
    constructor(size) {
      this.size = size;
      this.toppings = [];
    }
    addTopping(topping) {
      this.toppings.push([topping.quantity, topping.type]);
    }
  }

  class Topping {
    constructor(type, quantity) {
      this.type = type;
      this.quantity = quantity;
    }
  }

  const SIZES = ["slice", "half-eaten", "whole", "whatever is left"]

  const TOPPINGS = ["extra cheese", "pepperoni", "anchovies", "black olives", "onion", "mushroom", "sausage", "bell pepper", "bacon", "spinach", "pineapple"]

  //frontend

})();
