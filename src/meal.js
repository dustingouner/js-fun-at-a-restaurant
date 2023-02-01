function nameMenuItem(itemName) {
  var menuItemName = {
    name: `Delicious ${itemName}`
  }
  return menuItemName.name

}

function createMenuItem(name, price, type) {
  var menuItem = {
    name: name,
    price: price, 
    type: type
  }
  return menuItem
}

function addIngredients(ingredient, array) {
  if (!array.includes(ingredient))
  return array.push(ingredient)
}

function formatPrice(initialPrice) {
  return '$' + initialPrice
}

function decreasePrice(price) {
  return price * .90
}

function createRecipe(title, ingredients, menuItemType) {
  var recipe = {title: title, ingredients: ingredients, type: menuItemType}
  return recipe
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


