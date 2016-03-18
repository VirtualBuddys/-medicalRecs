'use strict';

//TODO debug why this test wont run
describe('newPatientController', function() {
  var $scope;
  var $state;
  var $window;
  var $httpBackend;
  var $controller;
  var newPatientModel;
  var ctrl;

  beforeEach(module('app'));
  beforeEach(inject(function($injector, $rootScope){
    $scope = $rootScope.$new();
    $state = $injector.get('$state');
    $window = $injector.get('window');
    $httpBackend = $injector.get('$httpBackend');
    $controller = $injector.get('$controller');
    newPatientModel = $injector.get('newPatientModel');

    ctrl = $controller('newPatientController', {
      $scope: $scope,
      $state: $state,
      $window: $window
    });
  }));

  //Definition specs
  it('data should be a property on the scope', function(){
    expect(ctrl.data).toBeDefined();
  });

  it('data.prefix should be on the scope', function(){
    expect(ctrl.data.prefix).toBeUndefined();
  });

  it('data.firstName should be on the scope', function(){
    expect(ctrl.data.firstName).toBeUndefined();
  });

  it('data.middleInitial should be on the scope', function(){
    expect(ctrl.data.middleInitial).toBeUndefined();
  });

  it('data.lastName should be on the scope', function(){
    expect(ctrl.data.lastName).toBeUndefined();
  });

  it('data.sex should be on the scope', function(){
    expect(ctrl.data.sex).toBeUndefined();
  });

  it('data.ssn should be on the scope', function(){
    expect(ctrl.data.ssn).toBeUndefined();
  });

  it('data.address1 should be on the scope', function(){
    expect(ctrl.data.address1).toBeUndefined();
  });

  it('data.city should be on the scope', function(){
    expect(ctrl.data.city).toBeUndefined();
  });

  it('data.stateUsa should be on the scope', function(){
    expect(ctrl.data.stateUsa).toBeUndefined();
  });

  it('data.zipCode should be on the scope', function(){
    expect(ctrl.data.zipCode).toBeUndefined();
  });

  it('data.homeNumber should be on the scope', function(){
    expect(ctrl.data.homeNumber).toBeUndefined();
  });

  it('data.workNumber should be on the scope', function(){
    expect(ctrl.data.workNumber).toBeUndefined();
  });

  it('data.primaryNumber should be on the scope', function(){
    expect(ctrl.data.primaryNumber).toBeUndefined();
  });

  it('data.email should be on the scope', function(){
    expect(ctrl.data.email).toBeUndefined();
  });

  it('data.prefixKin should be on the scope', function(){
    expect(ctrl.data.prefixKin).toBeUndefined();
  });

  it('data.firstNameKin should be on the scope', function(){
    expect(ctrl.data.firstNameKin).toBeUndefined();
  });

  it('data.middleInitialKin should be on the scope', function(){
    expect(ctrl.data.middleInitialKin).toBeUndefined();
  });

  it('data.lastNameKin should be on the scope', function(){
    expect(ctrl.data.lastNameKin).toBeUndefined();
  });

  it('data.relation should be on the scope', function(){
    expect(ctrl.data.relation).toBeUndefined();
  });

  it('data.numberKin should be on the scope', function(){
    expect(ctrl.data.numberKin).toBeUndefined();
  });

  it('data.prefix should be on the scope', function(){
    expect(ctrl.data.prefix).toBeUndefined();
  });

  it('createPatient should be on the scope', function(){
    expect(ctrl.createPatient).toBeDefined();
  })

})
