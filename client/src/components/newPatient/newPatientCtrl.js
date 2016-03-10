angular.module('app.newPatient', [])
  .controller('newPatientCtrl', [ function(){
    var that = this;
    that.data = {};

    that.createPatient = function(){
      //TODO send to Factory- POST
    };
  }]);
