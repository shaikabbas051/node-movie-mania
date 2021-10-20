var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.status(200).send("respond with a resource!");
});
router.post("/", (req, res) => {
  res.send(req.body.name + " post success");
});
module.exports = router;
