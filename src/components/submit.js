import React from 'react';


class Submit extends React.Component {

  constructor(props){
    super(props);
  }


  render(){
    return(
      <div>
        <form action="#">
          <input type="submit" value="Save Results" />
        </form>
      </div>
    );
  }
}


export default Submit;
