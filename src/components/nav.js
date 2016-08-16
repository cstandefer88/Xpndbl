import React from 'react';


class Nav extends React.Component {

  constructor(props){
    super(props);
  }


  render(){
    return(
      <div>
        <a href="#">Directions</a>
        <a href="#">New Month</a>
        <a href="#">Past Months</a>
        <a href="#">Log In</a>
        <a href="#">Log Out</a>
      </div>
    );
  }
}


export default Nav;
