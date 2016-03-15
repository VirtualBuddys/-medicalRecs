angular.module('app.newPatient', [])
  .controller('newPatientCtrl', ['newPatientModel', function(newPatientModel){
    var that = this;
    that.data = {};
    that.data.prefix;
    that.data.firstName;
    that.data.middleInitial;
    that.data.lastName;
    that.data.sex;
    that.data.ssn;
    that.data.address1;
    that.data.city;
    that.data.stateUsa;
    that.data.zipCode;
    that.data.homeNumber;
    that.data.cellNumber;
    that.data.workNumber;
    that.data.primaryNumber;
    that.data.email;
    that.data.prefixKin;
    that.data.firstNameKin;
    that.data.middleInitialKin;
    that.data.lastNameKin;
    that.data.relation;
    that.data.numberKin;


    that.createPatient = function(){
      //TODO
        //check to see if all the necessary fields are filled
        //put it into the patient object
      console.log('CREATE PATIENT HAS BEEN CALLED');
      var patient = that.data;

      newPatientModel.postNewPatient(patient)
          .then(function(results){
            console.log('SUCCESS INSIDE CREATEPATIENT CTRL');
          })
          .catch(function(error){
            console.log(error, 'ERROR INSIDE CREATE PATIENT CTRL');
          })



    };
  }]);
