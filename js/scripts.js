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
      this.subtotal = 0;
    }
    addPizza(pizza) {
      let price = 0;
      price += SIZES[pizza.size];
      pizza.toppings.forEach(function(topping){
        price += topping.quantity;
      });
      this.subtotal += price;
      return price;
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
    totalPrice() {
      return this.subtotal + this.deliveryPrice();
    }
  }

  const SIZES = {
    slice: 5,
    half: 10,
    whole: 15,
    leftover: 0,
  };

  const TOPPINGS = ["egg", "corn", "peach slices", "iceburg lettuce", "anchovies", "artichoke", "game hen", "figs", "oysters", "lemon"]

  //test data

  let price = new Price("delivery");

  let pizza1 = new Pizza("whole");
  let topping1 = new Topping("egg", 1);
  let topping2 = new Topping("olive", 1);
  pizza1.addTopping(topping1);
  pizza1.addTopping(topping2);

  let pizza2 = new Pizza("slice");
  let topping3 = new Topping("lettuce", 1);
  pizza2.addTopping(topping3);

  console.log(price.addPizza(pizza1));
  console.log(price.addPizza(pizza2));
  console.log(price.subtotal)
  console.log(price.totalPrice())




  //frontend

  const addIngredient = function() {
    $(".pizzaTopping").append(`<select class="custom-select form-control ingredients">
                                <option selected disabled>topping preference</option>
                                <option value="egg">egg</option>
                                <option value="corn">corn</option>
                                <option value="peach slices">peach slices</option>
                                <option value="iceburg lettuce">iceburg lettuce</option>
                                <option value="anchovies">anchovies</option>
                                <option value="artichoke">artichoke</option>
                                <option value="game hen">game hen</option>
                                <option value="figs">figs</option>
                                <option value="oysters">oysters</option>
                                <option value="lemon">lemon</option>
                              </select>`)
  }

  $(document).ready(function(){
    // let quantity = $("#pizzaQuantity").val();
    // let topping = $(".ingredient").val();

    $("#addIngredientButton").click(function(){
      addIngredient();
    });

    

  });
// })();
