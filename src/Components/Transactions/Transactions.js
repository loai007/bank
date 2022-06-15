import React, { Component } from "react";
import Transaction from "../Transaction/Transaction";

class Transactions extends Component {
  constructor() {
    super();
    this.state = {
      isItemDeleted: false,
    };
  }
  checkIsItemDeleted() {
    this.setState({ isItemDeleted: true });
  }

  render() {
    let total = 0;
    this.props.transactionsDetails.map((transaction) => {
      total += parseInt(transaction.amount);
    });
    return (
      <div>
        <div>Total: {total}</div>
        {this.props.transactionsDetails.map((transaction) => (
          <Transaction
            id={transaction._id}
            deleteButtonClick={this.props.deleteTransactionFunc}
            transactionDetails={transaction}
          />
        ))}
      </div>
    );
  }
}

export default Transactions;
