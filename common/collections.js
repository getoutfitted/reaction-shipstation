ReactionCore.Schemas.ShipstationPackageConfig = new SimpleSchema([
  ReactionCore.Schemas.PackageConfig, {
    'settings.api.apiKey': {
      type: String,
      label: 'Shipstation API Key',
      optional: true
    },
    'settings.api.secret': {
      type: String,
      label: 'Shipstation Secret API Key',
      optional: true
    }
  }
]);
