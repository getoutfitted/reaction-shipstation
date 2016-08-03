import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Packages } from '/lib/collections';
import { Reaction, Logger } from '/server/api';
import { HTTP } from 'meteor/http';
import { Base64 } from 'meteor/base64';

function shipstationPackageConfigured(shipstation) {
  if (!shipstation || !shipstation.enabled) {
    throw new Error('403 Access Denied, Shipstation is not enabled for this shop.');
  }
  if (!shipstation.settings
      || !shipstation.settings.api
      || !shipstation.settings.api.apiKey
      || !shipstation.settings.api.secret) {
    throw new Error('403 Shiptation API Keys are not configured');
  }
}

Meteor.methods({
  'shipstation/createOrder': function (order) {
    check(order, Object);

    const shipstationPackage = Packages.findOne({
      name: 'reaction-shipstation',
      shopId: Reaction.getShopId()
    });
    shipstationPackageConfigured(shipstationPackage);
    let formattedAuth = shipstationPackage.settings.api.apiKey + ':' + shipstationPackage.settings.api.secret;
    let encodedAuth = Base64.encode(formattedAuth);

    try {
      HTTP.call('POST', 'https://ssapi.shipstation.com/orders/createorder', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + encodedAuth
        },
        data: order
      });
      Logger.info(`AdvancedFulfillment pushed order ${order.orderNumber} to ShipStation`);
    }
    catch(e) {
      Logger.error(`${order.orderNumber} was not uploaded to Shipstation. Error ${e}`)
    }
  }
});
