ReactionCore.registerPackage({
  label: 'Shipstation',
  name: 'reaction-shipstation',
  icon: 'fa fa-cog',
  autoEnable: false,
  registry: [{
    route: '/dashboard/shipstation',
    provides: 'dashboard',
    name: 'shipstation',
    label: 'Shipstation',
    description: 'Shipstation Integration',
    container: 'getoutfitted',
    icon: 'fa fa-cog',
    template: 'shipStationDashboard',
    workflow: 'coreWorkflow',
    priority: 3
  }, {
    route: '/dashboard/shipstation/settings',
    provides: 'settings',
    label: 'Shipstation Settings',
    name: 'shipstationSettings',
    template: 'shipstationSettings'
  }]
});
