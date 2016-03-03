angular.module('app', [
  'ui.router',
  'app.home',
  'app.billingProfile',
  'app.insuranceProfile',
  'app.newBilling',
  'app.newInsurance',
  'app.newPatient',
  'app.patientInfo',
  'app.patientSearch',
  'app.recordProfile'
])
.config(['$stateProvider', '$urlProvider, $httpProvider', function($stateProvider, $urlProvider, $httpProvider){
  $urlProvider.otherwise('/');
  $stateProvider
    .state('home', {
      templateUrl: 'src/components/home/homeView.html',
      url: '/',
      controller: 'homeCtrl',
      controllerAs: 'hc'
    })
    .state('billingProfile', {
      templateUrl: 'src/components/billingProfile/billingProfileView.html',
      url: '/billing/:id',
      controller: 'billingProfileCtrl',
      controllerAs: 'bpc'
    })
    .state('insuranceProfile', {
      templateUrl: 'src/components/insuranceProfile/insuranceProfileView.html',
      url: '/insurance/:id',
      controller: 'insuranceProfileCtrl',
      controllerAs: 'ipc'
    })
    .state('newBilling', {
      templateUrl: 'src/components/newBilling/newBillingView.html',
      url: '/newbilling',
      controller: 'newBillingCtrl',
      controllerAs: 'nbc'
    })
    .state('newInsurance', {
      templateUrl: 'src/components/newInsurance/newInsuranceView.html',
      url: '/newinsurance',
      controller: 'newInsuranceCtrl',
      controllerAs: 'nic'
    })
    .state('newPatient', {
      templateUrl: 'src/components/newPatient/newPatientView.html',
      url: '/newpatient',
      controller: 'newPatientCtrl',
      controllerAs: 'npc'
    })
    .state('patientProfile', {
      templateUrl: 'src/components/patientProfile/patientProfileView.html',
      url: 'patient/:id',
      controller: 'patientProfileCtrl',
      controllerAs: 'ppc'
    })
    .state('patientSearch', {
      templateUrl: 'src/components/patientSearch/patientSearchView.html',
      url: '/search',
      controller: 'patientSearchCtrl',
      controllerAs: 'psc'
    })
    .state('recordProfile', {
      templateUrl: 'src/components/recordProfile/recordProfileView.html',
      url: '/record/:id',
      controller: 'recordProfileCtrl',
      controllerAs: 'rpc'
    })
}])
