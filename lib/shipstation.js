Shipstation = {};


Shipstation.createOrder = function (order) {
  check(order, Object);
  check(order.orderNumber, Number);
  check(order.orderDate, Date);
  check(order.orderStatus, String);
  check(order.billTo, Object);
  check(order.shipTo, Object)
  const allowedOrderStatuses = ['awaiting_payment',
                            'awaiting_shipment',
                            'shipped',
                            'on_hold',
                            'cancelled'];
  let validStatus = _.contains(allowedOrderStatuses, order.orderStatus);
  if (!validStatus) {
    throw new Error('406 Shipstation ships status is not recognized.');
  }

  Meteor.call('shipstation/createOrder', order);
};
