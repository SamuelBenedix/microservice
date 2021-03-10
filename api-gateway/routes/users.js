var express = require("express");
var router = express.Router();
const { APP_Name } = process.env;

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send(APP_Name);
});

module.exports = router;
