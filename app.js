function logDrinks(){

var idNum = 0;

for(j=0;j<allDrinks.length;j++){
  idNum++;
  var drinkName = allDrinks[j].name;
  var drinkImage = allDrinks[j].img;
  var drinkIngredients =  Object.keys(allDrinks[j].ingredients);
  var drinkIngredientsAmount =  Object.values(allDrinks[j].ingredients);
  var drinkEachIngredient = [];
  var drinkEachIngredientAmount = [];
  var deiString;
  var deiaString;


  for(i=0;i<drinkIngredients.length;i++) {
     drinkEachIngredient.push(drinkIngredients[i]);
    deiString = drinkEachIngredient.join('<br />');
   };
   for(k=0;k<drinkIngredients.length;k++) {
      drinkEachIngredientAmount.push(drinkIngredientsAmount[k]);
     deiaString = drinkEachIngredientAmount.join('<br />');
    };
  Element.prototype.appendAfter = function (element) {
  element.parentNode.insertBefore(this, element.nextSibling);
  }, false;
   var NewElement = document.createElement('div');
   NewElement.innerHTML = '<div class="contain-all-drinks"><div class="drink-contain"><div class="img-div drink-align"><img width="100%" class="drink-image" src="'+drinkImage+'"/></div><div class="drink-align"><div class="drink-name">'+drinkName+'</div><div class="drink-ingredients-align"><div class="drink-ingredients drink-ingredients-align">'+deiString+'</div><div class="drink-ingredients-amount drink-ingredients-align">'+deiaString+'</div></div></div>';
   NewElement.id = 'NewElement' + idNum;
   NewElement.className = 'dynamic-div';
   document.body.style.height = document.body.style.height + 3000;
   NewElement.appendAfter(document.getElementById('ordered-drinks'));
 }

 var alphabeticallyOrderedDivs = $('.dynamic-div').sort(function(a, b) {
 return String.prototype.localeCompare.call($(a).text().toLowerCase(), $(b).text().toLowerCase());
});
var container = $(".ordered-drinks-container");
container.detach().empty().append(alphabeticallyOrderedDivs);
$('.contain-all').append(container);

}
