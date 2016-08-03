import { SimpleSchema } from "meteor/aldeed:simple-schema";
import { PackageConfig } from "/lib/collections/schemas/registry";

export const ShipstationPackageConfig = new SimpleSchema([
  PackageConfig, {
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
