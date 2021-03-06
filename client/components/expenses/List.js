import React, { Component } from 'react'

class Expense extends Component {
  render() {
    return (
        <tr>
          <td>{this.props.date}</td>
          <td>{this.props.budget}</td>
          <td>{this.props.comment}</td>
          <td>{this.props.amount}</td>
        </tr>
    )
  }
}

export default class ExpenseList extends Component {
  render() {
    return (
        <table className="table table-striped table-hover">
          <tbody>
            <tr>
              <th>Date</th>
              <th>Budget</th>
              <th>Comment</th>
              <th>Amount</th>
            </tr>

            {this.props.expenses.map(expense => <Expense key={expense.id} {...expense} />)}
          </tbody>
        </table>
    );
  }
}
