/**
 * Initializes the food menu
 */
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
        alert('you have to choose an option!!!');
    }
  }
}


$(document).ready(initFoodMenu);