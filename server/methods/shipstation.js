Meteor.methods({
  'shipstation/createOrder': function (order, key) {
    check(order, Object);
    check(key, String);
    let shipstationOrder = {
      orderNumber: order.orderNumber,
      orderDate: order.createdAt,
      orderStatus: 'awaiting_shipment',
      billTo: {
        name: 'Paul Grever',
        company: 'GetOutfitted',
        street1: '460 S Marion pkwy',
        street2: '1602C',
        street3: null,
        city: 'Denver',
        state: 'CO',
        postalCode: '80209',
        phone: '6082392471',
        residential: true,
        addressVerified: 'Address validated successfully'
      },
      shipTo: {
        name: 'Paul Grever',
        company: 'GetOutfitted',
        street1: '460 S Marion pkwy',
        street2: '1602C',
        street3: null,
        city: 'Denver',
        state: 'CO',
        postalCode: '80209',
        phone: '6082392471',
        residential: true,
        addressVerified: 'Address validated successfully'
      }
    };

    HTTP.call('POST', 'https://ssapi.shipstation.com/orders/createorder', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + key
      },
      data: shipstationOrder
    });
  }
});
