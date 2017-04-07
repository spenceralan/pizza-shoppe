// (function(){

  //backend

  const SIZES = {
    slice: 5,
    half: 10,
    whole: 15,
    leftover: 0,
  };

  class Pizza {
    constructor(size) {
      this.size = size;
      this.toppings = [];
    }
    addTopping(topping) {
      this.toppings.push(topping);
    }
  }

  function Topping(type, quantity) {
    this.type = type;
    this.quantity = 1;
  }

  function Cart() {
    this.pizzas = [];
  }

  Cart.prototype.addToCart = function(pizza, price) {
    this.pizzas.push([pizza, price]);
  }

  class Price {
    constructor() {
      this.deliveryMethod;
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



  const TOPPINGS = ["egg", "corn", "peach slices", "iceburg lettuce", "anchovies", "artichoke", "game hen", "figs", "oysters", "lemon"]

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

  const refresh = function() {
    $(".pizzaTopping").empty();
    addIngredient();
    pizza = new Pizza;
    $("#pizzaQuantity").val("none");
  }

  $(document).ready(function(){

    let cart = new Cart();
    let price = new Price();

    $("#resetButton").click(function(){
      refresh();
      cart = new Cart();
      price = new Price();
      $("#ingredientsDisplay").empty();
      $("#deliveryOption").val("none")
    });

    $("#deliveryOption").change(function(){
      price.deliveryMethod = $("#deliveryOption").val();
    });

    $("#addIngredientButton").click(function(){
      addIngredient();
    });

    $("#addPizzaButton").click(function(){
      let pizzaQuantity = $("#pizzaQuantity").val();
      let pizza = new Pizza(pizzaQuantity);

      $(".ingredients").each(function() {
        let ingredient = $(this).val();
        let topping = new Topping(ingredient, 1);
        pizza.addTopping(topping);
      });

      $("#ingredientsDisplay").empty();
      cart.addToCart(pizza, price.addPizza(pizza));
      cart.pizzas.forEach(function(pizza){
        $("#ingredientsDisplay").append(`<li>${pizza[0].size}: $${pizza[1]}</li>`);
      });

      $("#checkoutButton").show();

      refresh();

      $("#checkoutButton").click(function(){
        $("#orderDisplay").hide();
        $("#summaryDisplay").show();
        $("#summaryDisplay").empty();
        $("#summaryDisplay").append(`
          <h2>review your order</h2>
          <h3>You have ${cart.pizzas.length} pizza in your cart</h3>
          <p>Your total is $${price.totalPrice()}</p>
          <button class="btn btn-danger" id="orderButton">place order</button>
        `);
        $("#orderButton").click(function(){
          $("#summaryDisplay").hide();
          $("#resultsDisplay").show();
        });
      });
    });


  });
// })();
