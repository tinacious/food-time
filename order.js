/*

  - hide all js-food-options

  - user chooses a food option: sushi, burger, salad
  
  - add an event listener based on the selection they make
    - ??? how do we add this?
    - what does it do?
        - we want the next option to show up
          - what is my option?

          - how do i make it show up?


IINSTRUCTIONS

- attach an event listener that logs to the console

*/



$(document).ready(initFoodMenu);


function initFoodMenu() {
  // DOM elements
  var $burgerToppings = $('#burger-toppings');
  var $sushiType = $('#sushi-type');
  var $saladOptions = $('#salad-protein');

  hideMenuOptions();
  listenForFoodItemChange();


  function hideMenuOptions() {
    var $foodOptions = $('.js-food-options');
    $foodOptions.hide();
  }

  function listenForFoodItemChange() {
    var $foodSelector = $('#food');
    $foodSelector.on('change', handleFoodCategoryChange);
  }

  function handleFoodCategoryChange(evt) {
    var foodOption = evt.target.value;

    hideMenuOptions();

    switch (foodOption) {
      case 'burger':
        $burgerToppings.show();
        break;

      case 'sushi':
        $sushiType.show();
        break;

      case 'salad':
        $saladOptions.show();
        break;

      default:
        console.log('you have to choose an option!!!')
    }
  }
}
