import { Template } from 'meteor/templating';
import { Packages } from '/lib/collections';
import { Reaction } from '/client/api';
import { ShipstationPackageConfig } from '../../../lib/collections';

import './settings.html';

Template.shipstationSettings.helpers({
  ShipstationPackageConfig: function() {
    return ShipstationPackageConfig;
  },
  packageData: function () {
    return Packages.findOne({
      name: 'reaction-shipstation',
      shopId: Reaction.getShopId()
    });
  }
});

AutoForm.hooks({
  'shipstation-update-form': {
    onSuccess: function (operation, result, template) {
      Alerts.removeSeen();
      return Alerts.add('Shipstation settings saved.', 'success', {
        autoHide: true
      });
    },
    onError: function (operation, error, template) {
      Alerts.removeSeen();
      return Alerts.add('Shipstation settings update failed. ' + error, 'danger');
    }
  }
});
