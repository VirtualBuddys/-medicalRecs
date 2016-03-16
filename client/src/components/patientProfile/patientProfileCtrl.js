angular.module('app.patientProfile', [])
    .controller('patientProfile', [ '$stateParams', function($stateParams){
        var that = this;
        that.data = {};
        //TODO make sure you connect this with the state change in patientSearch
        that.data.patientId = $stateParams.patientId;

        that.getPatientProfile = function(){
          //TODO make a factory that will do a GET request via that.data (that.data.patientId);
        }

        //TODO have a billing search, and an Insturance Insurance search, and a record search
    }]);
