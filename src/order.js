
function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3 ) {
    return deliveryOrders.push(order)
  } else
    return order
}

function refundOrder(orderNum, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) 
    if (orderNum === deliveryOrders[i].orderNumber) {
      return deliveryOrders.splice(i, 1)
    }
  }

  function listItems(deliveryOrders) {
    var item = []
    for (var i = 0; i < deliveryOrders.length; i++) 
      item.push(deliveryOrders[i].item)
      return item.join(', ')
  }

  function searchOrder(deliveryOrders, itemName) {
    for(var i = 0; i < deliveryOrders.length; i++) 
      if(deliveryOrders[i].item === itemName) {
        return true
      } 
      return false
    }

    





  






module.exports = {


  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}