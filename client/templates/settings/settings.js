Template.shipstationSettings.helpers({
  packageData: function () {
    return ReactionCore.Collections.Packages.findOne({
      name: 'reaction-shipstation',
      shopId: ReactionCore.getShopId()
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
