Shipstation = {};

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

Shipstation.createOrder = function (order) {
  check(order, Object);
  const shipstationPackage = ReactionCore.Collections.Packages.findOne({
    name: 'reaction-shipstation',
    shopId: ReactionCore.getShopId()
  });
  shipstationPackageConfigured(shipstationPackage);
  let formattedAuth = shipstationPackage.settings.api.apiKey + ':' + shipstationPackage.settings.api.secret;
  let encodedAuth = Base64.encode(formattedAuth);
  Meteor.call('shipstation/createOrder', order, encodedAuth);
};
