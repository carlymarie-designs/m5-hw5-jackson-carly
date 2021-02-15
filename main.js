

// vars 
var pizza = new Object();

// object method
var addToppings = {
  crust: 'butter',
  cheese: 'american',
  sauce: 'red',

  extras: function () {
    return 'Please add pepperoni and sausage';
  }
};

function orderPizza() {
  console.log(addToppings.crust);
  console.log(addToppings.cheese);
  console.log(addToppings.sauce);
  console.log(addToppings.extras);
}

// invoke functions
orderPizza();