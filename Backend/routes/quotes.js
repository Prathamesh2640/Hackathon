const db = require("../utils/dbpool");
const { apiSuccess, apiError } = require("../utils/apiresult");
const express = require("express");
const router = express.Router();
//GetAll Quotes
router.get("", (req, resp) => {
  db.query("SELECT * FROM quote", (err, result) => {
    if (err) return resp.send(apiError(err));
    if (result.length === 0) return resp.send(apiError("No Quote found"));
    return resp.send(apiSuccess(result));
  });
});

module.exports = router;
