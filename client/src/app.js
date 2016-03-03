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
      url: '/'
    })
    .state('billingProfile', {
      templateUrl: 'src/components/billingProfile/billingProfileView.html',
      url: '/billing/:id'
    })
    .state('insuranceProfile', {
      templateUrl: 'src/components/insuranceProfile/insuranceProfileView.html',
      url: '/insurance/:id'
    })
    .state('newBilling', {
      templateUrl: 'src/components/newBilling/newBillingView.html',
      url: '/newbilling'
    })
    .state('newInsurance', {
      templateUrl: 'src/components/newInsurance/newInsuranceView.html',
      url: '/newinsurance'
    })
    .state('newPatient', {
      templateUrl: 'src/components/newPatient/newPatientView.html',
      url: '/newpatient'
    })
    .state('patientProfile', {
      templateUrl: 'src/components/patientProfile/patientProfileView.html',
      url: 'patient/:id'
    })
    .state('patientSearch', {
      templateUrl: 'src/components/patientSearch/patientSearchView.html',
      url: '/search'
    })
    .state('recordProfile', {
      templateUrl: 'src/components/recordProfile/recordProfileView.html',
      url: '/record/:id'
    })
}])
