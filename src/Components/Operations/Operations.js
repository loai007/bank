import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "./Operations.css";
const axios = require("axios");
class Operations extends Component {
  constructor() {
    super();
    this.state = {
      amount: 0,
      vendor: "",
      category: "",
      _id: this.props.id,
      isButtonClicked: false,
    };
  }

  withdrawRequest = () => {
    const transaction = {
      amount: this.state.amount * -1,
      vendor: this.state.vendor,
      category: this.state.category,
      _id: this.state._id,
    };
    this.props.addTransactionFunc(transaction);
    axios.post("http://localhost:5000/transaction", transaction).then();
    this.setState({ isButtonClicked: true });
  };

  depositRequest = () => {
    const transaction = {
      amount: this.state.amount,
      vendor: this.state.vendor,
      category: this.state.category,
      _id: this.state._id,
    };
    this.props.addTransactionFunc(transaction);
    axios.post("http://localhost:5000/transaction", transaction).then();
    this.setState({ isButtonClicked: true });
  };

  render() {
    return (
      <div>
        <div>
          <input
            id="amount"
            type={"number"}
            value={this.state.amount}
            onChange={(e) => this.setState({ amount: e.target.value })}
            placeholder="Enter Amount"
          />
          <input
            id="vendor"
            value={this.state.vendor}
            onChange={(e) => this.setState({ vendor: e.target.value })}
            placeholder="Enter Vendor Name"
          />
          <input
            id="category"
            value={this.state.category}
            onChange={(e) => this.setState({ category: e.target.value })}
            placeholder="Enter Category Name"
          />
        </div>
        <div>
          <button className="button" onClick={this.withdrawRequest}>
            Withdraw
          </button>
          <button className="button" onClick={this.depositRequest}>
            Deposit
          </button>
          {this.state.isButtonClicked ? <Redirect to="/" /> : null}
        </div>
      </div>
    );
  }
}

export default Operations;
