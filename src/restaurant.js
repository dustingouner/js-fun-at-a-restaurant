
function createRestaurant(restName) {
  var restaurant = {
    name: restName, 
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
  return restaurant
}

function addMenuItem(restaurant, item) {
  if (!restaurant.menus[item.type].includes(item)) {
    restaurant.menus[item.type].push(item);
 }
}

function removeMenuItem(restaurant, itemName, type) {
  for (var i = 0; i < restaurant.menus[type].length; i++) {
    if (restaurant.menus[type][i].name === itemName) {
      restaurant.menus[type].splice(i, 1)
      return `No one is eating our ${itemName} - it has been removed from the ${type} menu!`
    }
  }
  return `Sorry, we don't sell ${itemName}, try adding a new recipe!`
}



module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}