import { Reaction } from '/server/api';

Reaction.registerPackage({
  label: 'Shipstation',
  name: 'reaction-shipstation',
  icon: 'fa fa-cog',
  autoEnable: true,
  registry: [{
    route: '/dashboard/shipstation',
    provides: 'dashboard',
    name: 'shipstation',
    label: 'Shipstation',
    description: 'Shipstation Integration',
    container: 'getoutfitted',
    icon: 'fa fa-cog',
    template: 'shipStationDashboard',
    workflow: 'shipStationWorkflow',
    priority: 3
  }, {
    route: '/dashboard/shipstation/settings',
    provides: 'settings',
    label: 'Shipstation Settings',
    name: 'shipstationSettings',
    template: 'shipstationSettings'
  }],
  layout: [{
    workflow: "shipStationWorkflow",
    layout: "coreLayout",
    theme: "default",
    enabled: true,
    structure: {
      template: "shipStationDashboard",
      layoutHeader: "goLayoutHeader",
      layoutFooter: "goLayoutFooter",
      notFound: "goNotFound",
      dashboardControls: "dashboardControls",
      adminControlsFooter: "adminControlsFooter"
    }
  }, {
    workflow: "shipStationWorkflow",
    layout: "getoutfittedLayout",
    theme: "default",
    enabled: true,
    structure: {
      template: "shipStationDashboard",
      layoutHeader: "goLayoutHeader",
      layoutFooter: "goLayoutFooter",
      notFound: "goNotFound",
      dashboardControls: "dashboardControls",
      adminControlsFooter: "adminControlsFooter"
    }
  }]
});
