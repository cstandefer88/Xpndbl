import React from 'react';


class DateIncomeChoice extends React.Component {

  constructor(props){
    super(props);
  }


  render(){
    return(
      <div>
        <h3> Month & Year: { this.props.date } </h3>
        <h3> Income: ${ this.props.income } </h3>
      </div>
    );
  }
}


export default DateIncomeChoice;
