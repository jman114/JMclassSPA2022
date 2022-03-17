//We also need to import the Pizza model and instantiate an instance of Express Router module.

const { Router } = require("express");
const Pizza = require("../models/Pizza");
const router = Router();

// export the router variable to be used in the index.js file
module.exports = router;
