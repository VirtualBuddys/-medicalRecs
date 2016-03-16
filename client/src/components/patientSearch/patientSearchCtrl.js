angular.module('app.patientSearch', [])
  .controller('patientSearchCtrl', ['$state', function($state){
    var that = this;
    that.data = {};

    //TODO put an autocomplete that syncs up with the database;

    that.getAllPatientsThatFit = function(searchedQuery){

    };

    var changeState = function(patientId){
     //TODO fill in the $state.go
    };

    that.goToPatientProfile = function(patient){
      //TODO get the necessary stuff to pass in
      //call changeState();
    };


 }]);
