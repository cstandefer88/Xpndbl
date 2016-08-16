import React from 'react';
import Nav from './nav';
import Footer from './footer';


class Xpndbl extends React.Component {

  constructor(props){
    super(props);
  }


  render(){
    return(
      <div>
        <Nav />
        <h1>Welcome to Xpndbl</h1>
        <p>Take a look at the directions to see how to use this site.</p>
        <Footer />
      </div>
    );
  }
}


export default Xpndbl;
