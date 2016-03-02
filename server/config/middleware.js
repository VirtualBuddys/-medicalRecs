var morgan = require('morgan');
var bodyParser = require('body-parser');

module.exports = function(app, express) {
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + './../../client'));

  var patientRoute = express.Router();
  var staffRoute = express.Router();
  var recordRoute = express.Router();

  app.use('/api/patient', patientRoute);
  app.use('/api/staff', staffRoute);
  app.use('/api/record', recordRoute);

  require('./../patient/patientRouter.js')(patientRoute);
  require('./../staff/staffRouter.js')(staffRoute);
  require('./../record/recordRouter.js')(recordRoute);
};
