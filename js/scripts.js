(function(){

  //backend

  class User {
    constructor(name, streetAddress, city, state, zipCode) {
      this.name = name;
      this.streetAddress = streetAddress;
      this.city = city;
      this.state = state;
      this.zipCode = zipCode;
    }
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

  class Price {
    constructor(deliveryMethod) {
      this.deliveryMethod = deliveryMethod;
      this.pizzas = [];
    }
    addPizza(pizza) {
      this.pizzas.push(pizza);
    }
    totalPrice() {
      let price = 0;
      this.pizzas.forEach(function(){
        //analyze pizza objects for price
      });
      return price;
    }
  }

  const SIZES = ["slice", "half-eaten pie", "whole pie", "whatever is left"]

  const TOPPINGS = ["egg", "corn", "peach slices", "iceburg lettuce", "anchovies", "artichoke", "quail", "figs", "oysters", "lemmon"]

  //frontend

  $(document).ready(function(){
    
  });
})();
