const express = require("express");
const router = express.Router();
const Transaction = require("../model/Transaction");
const axios = require("axios");

router.get("/transactions", function (req, res) {
  Transaction.find({}, function (err, transactions) {
    res.send(transactions);
    res.end();
  });
});

router.post("/transaction", function (req, res) {
  let transaction = new Transaction({
    amount: `${req.body.amount}`,
    vendor: `${req.body.vendor}`,
    category: `${req.body.category}`,
  });
  transaction.save();
  res.end();
});

router.delete("/transaction/:transactionID", async function (req, res) {
  console.log();
  const transactionID = req.params.transactionID;
  const removedTransaction = await Transaction.deleteOne({
    id: transactionID,
  });
  res.send(removedTransaction);
  res.end();
});

module.exports = router;
