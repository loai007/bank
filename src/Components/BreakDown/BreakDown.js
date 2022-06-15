import React, { Component } from "react";

class BreakDown extends Component {
  constructor() {
    super();
    this.state = {
      transactionsToCategories: {},
    };
  }
  transactionsToCategories() {
    let transactionsToCategories = {};
    for (let transaction of this.props.transactionsDetails) {
      if (transactionsToCategories[transaction.category]) {
        console.log("here1");
        transactionsToCategories[transaction.category] += transaction.amount;
      } else {
        console.log("here2");

        transactionsToCategories[transaction.category] = transaction.amount;
      }
    }
    this.setState({ transactionsToCategories });
  }

  displayCategories(category) {
    return (
      <div>
        {category}: {this.state.transactionsToCategories[category]}
      </div>
    );
  }
  componentDidMount() {
    setTimeout(() => {
      this.transactionsToCategories();
    }, 500);
  }
  render() {
    return (
      <div>
        <div>
          {Object.keys(this.state.transactionsToCategories).map((category) => (
            <div>
              {category}: {this.state.transactionsToCategories[category]}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default BreakDown;
