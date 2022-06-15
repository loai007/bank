import "./App.css";
import { Component } from "react";
import Transactions from "./Components/Transactions/Transactions";
import Operations from "./Components/Operations/Operations";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import BreakDown from "./Components/BreakDown/BreakDown";
const axios = require("axios");

class App extends Component {
  constructor() {
    super();
    this.state = {
      transactions: [],
    };
  }

  async getAllTransactions() {
    const transactionsApiResponse = await axios.get(
      "http://localhost:5000/transactions"
    );
    return transactionsApiResponse.data;
  }

  async componentDidMount() {
    let transactions = await this.getAllTransactions();
    this.setState({ transactions });
  }

  renderAfterDelete = (idToDelete) => {
    console.log(idToDelete);
    let tran = [...this.state.transactions];
    let filtered = tran.filter((t) => t._id !== idToDelete);
    this.setState({
      transactions: filtered,
    });
    console.log(this.state.transactions);
  };

  addTransaction = (newTransaction) => {
    let transactions = [...this.state.transactions];
    transactions.push({
      amount: newTransaction.amount,
      vendor: newTransaction.vendor,
      category: newTransaction.category,
      _id: newTransaction._id,
    });
    this.setState({ transactions });
  };
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <div id="main-links">
              <Link to="/">Transactions</Link>
              <Link to="/operations">Operations</Link>
              <Link to="/break-down">BreakDown</Link>
            </div>

            <Route
              path="/"
              exact
              render={() => (
                <Transactions
                  deleteTransactionFunc={this.renderAfterDelete}
                  transactionsDetails={this.state.transactions}
                />
              )}
            />
            <Route
              path="/operations"
              exact
              render={() => (
                <Operations addTransactionFunc={this.addTransaction} />
              )}
            />
            <Route
              path="/break-down"
              exact
              render={() => (
                <BreakDown transactionsDetails={this.state.transactions} />
              )}
            />
          </header>
        </div>
      </Router>
    );
  }
}
export default App;
