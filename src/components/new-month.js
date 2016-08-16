import React from 'react';
import DateIncome from './date-income';
import ExpenseForm from './expense-form';
import ResultsContainer from './results-container';


class NewMonth extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      date: null,
      income: null,
      category: [],
      descriptor: [],
      amount: [],
      currentCategory: null
    }
  }


  _dateIncomeUpdate(date, income){
    this.setState({
      date: date,
      income: income
    })
  }


  _expenseUpdate(category, descriptor, amount){
    var categoryArray = this.state.category;
    var descriptorArray = this.state.descriptor;
    var amountArray = this.state.amount;

    categoryArray.push(category);
    descriptorArray.push(descriptor);
    amountArray.push(amount);

    this.setState({
      category: categoryArray,
      descriptor: descriptorArray,
      amount: amountArray
    })
  }


  render(){
    return(
      <div>
        <DateIncome dateIncomeUpdate={ this._dateIncomeUpdate.bind(this) } />
        <ExpenseForm expenseUpdate={ this._expenseUpdate.bind(this) } />
        <ResultsContainer date={ this.state.date } income={ this.state.income } category={ this.state.category } descriptor={ this.state.descriptor } amount={ this.state.amount } currentCategory={ this.state.currentCategory } />
      </div>
    );
  }
}


export default NewMonth;
