import React from 'react';


class DateIncome extends React.Component {

  constructor(props){
    super(props);
  }


  _handleInput(event) {
    event.preventDefault();
    this.update();
  }


  update(){
    var date = this.refs.dateEntry.value;
    var income = this.refs.incomeEntry.value;
    this.props.dateIncomeUpdate(date, income);
  }


  render(){
    return(
      <div>
        <form onSubmit={this._handleInput.bind(this)}>
          Enter the date this form is for (month name and year):
          <input type="month" ref="dateEntry" name="date" />

          Enter your income for this past month:
          <input type="number" ref="incomeEntry" name="income" />

          <input type="submit" value="Submit to Results (Only Once)" />
        </form>
      </div>
    );
  }
}


export default DateIncome;
