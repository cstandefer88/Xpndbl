import React from 'react';


class Directions extends React.Component {

  constructor(props){
    super(props);
  }


  render(){
    return(
      <div>
        <p>This site is meant as a tool for people who are tired of budgets and want a different way of keeping on top of their expenses in relation to their income, keeping on top of debt reduction, and keeping on top of long-term savings and wealth-building.  It was derived from the book Your Money or Your Life.</p>
        <p>What you do is this: enter the month and year in question, enter your income, and then go about entering in the category of a particular expense, a description of that expense (what it was for specifically), and the amount of that expense.  The application will take care of listing everything out for you.  You can then click the Submit button at the bottom and save the form for later review if you wish.</p>
        <p>Best of luck as you traverse the world of personal finance.</p>
      </div>
    );
  }
}


export default Directions;
