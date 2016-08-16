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
        <DateIncomeChoice date={ this.props.date }  income={ this.props.income } />
        <ExpenseFormChoice category={ this.props.category } descriptor={ this.props.descriptor } amount={ this.props.amount } currentCategory={ this.props.currentCategory } />
        <Submit />
      </div>
    );
  }
}


export default ResultsContainer;
