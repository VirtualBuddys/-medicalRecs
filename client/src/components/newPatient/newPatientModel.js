angular.module('app.newPatient')
    .factory('newPatientModel', ['$http', function($http){
        var model = {};

        model.postNewPatient = function(patient) {
            return $http({
                method: 'POST',
                url: '/api/patient/postNewPatient',
                data: patient
            }).then(function(response){
                console.log('SUCCESS INSIDE POSTNEWPATIENT MODEL', response);
                return response;
            }).catch(function(error){
                console.log('EEROR INSIDE POSTNEWPATIENT MODEL', error);
            })

        };

        return model;
    }])