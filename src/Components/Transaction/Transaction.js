import React, { Component } from "react";
import "./Transaction.css";
const axios = require("axios");
class Transaction extends Component {
  constructor() {
    super();
  }
  deleteTransactionRequest = () => {
    this.props.deleteButtonClick(this.props.id);
    axios({
      method: "delete",
      url: `http://localhost:5000/transaction/_id=${this.props.id}`,
    }).then(() => {});
  };

  render() {
    let action = "";
    if (this.props.transactionDetails.amount > 0) action = "deposit";
    else action = "withdraw";
    return (
      <div id={this.props.id} className="transaction-container">
        <span className={action}>
          Amount: {this.props.transactionDetails.amount}{" "}
        </span>
        <span>Category: {this.props.transactionDetails.category} </span>
        <span>Vendor: {this.props.transactionDetails.vendor}</span>
        <button
          className="delete-button"
          onClick={this.deleteTransactionRequest}
        >
          Delete Transaction
        </button>
      </div>
    );
  }
}

export default Transaction;
