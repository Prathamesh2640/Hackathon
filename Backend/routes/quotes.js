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

//my quotes
router.get("/my", (req, resp) => {
  db.query(
    "SELECT * FROM quote WHERE userId = ?",
    [req.user.id],
    (err, result) => {
      if (err) return resp.send(apiError(err));
      if (result.length === 0) return resp.send(apiError("No Quote found"));
      return resp.send(apiSuccess(result));
    }
  );
});

router.post("/add", (req, resp) => {
  const { author, contents } = req.body;

  db.query(
    "INSERT INTO quote(author,contents,userId) VALUES (?,?,?) ",
    [author, contents, req.user.id],
    (err, result) => {
      if (err) return resp.send(apiError(err));
      // if user inserted successfully, return new user object
      if (result.affectedRows === 1) {
        db.query(
          "SELECT * FROM quote WHERE id=?",
          [result.insertId],
          (err, results) => {
            if (err) return resp.send(apiError(err));
            resp.send(apiSuccess(results[0]));
          }
        );
      }
    }
  );
});

router.delete("", (req, resp) => {
  db.query("DELETE FROM quote WHERE id = ?", [req.body.id], (err, results) => {
    if (err) return resp.send(apiError(err));
    if (results.affectedRows !== 1)
      return resp.send(apiError("Quote not found"));
    return resp.send(apiSuccess("Quote deleted"));
  });
});

router.patch("/update", (req, resp) => {
  db.query(
    "UPDATE quote SET contents = ? WHERE id = ?",
    [req.body.contents, req.body.id],
    (err, results) => {
      if (err) return resp.send(apiError(err));
      if (results.affectedRows !== 1)
        return resp.send(apiError("Quote not found"));
      return resp.send(apiSuccess("Quote updated"));
    }
  );
});

router.post("/mark", (req, resp) => {
  db.query(
    "INSERT INTO favourite (userId,quoteId) VALUES(?,?)",
    [req.user.id, req.body.quoteId],
    (err, result) => {
      if (err) return resp.send(apiError(err));
      if (result.affectedRows === 1) {
        db.query(
          "SELECT * FROM favourite WHERE id=?",
          [result.insertId],
          (err, results) => {
            if (err) return resp.send(apiError(err));
            resp.send(apiSuccess(results[0]));
          }
        );
      }
    }
  );
});

module.exports = router;
