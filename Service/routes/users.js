var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let data = {
      code:200,
      msg:"接口调用成功"
  }
  res.send(data);
});

module.exports = router;
