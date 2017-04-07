// (function(){

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
      this.toppings.push(topping);
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
    deliveryPrice() {
      const DELIVERY = 5;
      const PICKUP = 0;
      if (this.deliveryMethod === "delivery") {
        return DELIVERY;
      } else {
        return PICKUP;
      }
    }
    pizzaPrice(pizza) {
      const getPrice = function(pizza) {
        price += SIZES[pizza.size];
        pizza.toppings.forEach(function(topping){
          // use topping quantity for price scale
          price += topping.quantity;
        });
      };
      let price = 0;
      getPrice(pizza);
      return price;
    }
    pizzasPrice() {
      let prices = 0
      (function() {
        this.pizzas.forEach(function(pizza) {
          price += pizzaPrice(pizza);
        });
      })();
      return prices;
    }
    totalPrice() {
      return this.pizzasPrice() + this.deliveryPrice();
    }
  }

  const SIZES = {
    slice: 5,
    half: 10,
    whole: 15,
    leftover: 0,
  };

  const TOPPINGS = ["egg", "corn", "peach slices", "iceburg lettuce", "anchovies", "artichoke", "quail", "figs", "oysters", "lemmon"]

  //test data

  price = new Price("delivery");
  topping1 = new Topping("egg", 1);
  topping2 = new Topping("olive", 1);
  pizza = new Pizza("whole");
  pizza.addTopping(topping1);
  pizza.addTopping(topping2);
  console.log(price.pizzaPrice(pizza));



  //frontend

  $(document).ready(function(){

  });
// })();
