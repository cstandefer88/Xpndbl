import React from 'react';
import DateIncomeChoice from './date-income-choice';
import ExpenseFormChoice from './expense-form-choice';
import Submit from './submit';


class ResultsContainer extends React.Component {

  constructor(props){
    super(props);
  }


  render(){
    return(
      <div>
        <div>
          <h1>Form for: { this.props.date }</h1>
          <DateIncomeChoice date={ this.props.date }  income={ this.props.income } />
        </div>
        <div>
          <h2>Expenses</h2>
          <ExpenseFormChoice categories={ this.props.categories } expenseItems={ this.props.expenseItems } />
        </div>
        <Submit />
      </div>
    );
  }
}


export default ResultsContainer;
