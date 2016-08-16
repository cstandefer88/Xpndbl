import React from 'react';


class ExpenseForm extends React.Component {

  constructor(props){
    super(props);
  }


  _handleInput(event) {
    event.preventDefault();
    this._update();
  }


  _handleChange() {
    this.setState({
      currentCategory: this.refs.categoryEntry.value
    })
  }


  _update(){
    var category = this.refs.categoryEntry.value;
    var descriptor = this.refs.descriptorEntry.value;
    var amount = this.refs.amountEntry.value;
    this.props.expenseUpdate(category, descriptor, amount);
  }


  render(){
    return(
      <div>

        <form onSubmit={this._handleInput.bind(this)}>
          <div>
            <p>Pick the category of your purchase: </p>
            <select ref="categoryEntry" defaultValue="null" onChange={this._handleChange.bind(this)}>
              <option value="Housing">Housing</option>
              <option value="Utilities">Utilities</option>
              <option value="Food">Food</option>
              <option value="Clothing">Clothing</option>
              <option value="Transportation">Transportation</option>
              <option value="Medical and Health">Medical and Health</option>
              <option value="Insurance">Insurance</option>
              <option value="Personal">Personal</option>
              <option value="Recreation">Recreation</option>
              <option value="Debt Payments">Debt Payments</option>
            </select>
          </div>

          <p>What was the purchase? <textarea rows="4" cols="20" ref="descriptorEntry"></textarea></p>

          <p>Enter the amount for this purchase: $<input type="number" ref="amountEntry" name="amount" /></p>

          <input type="submit" value="Submit To Results" />
        </form>

      </div>
    );
  }
}


export default ExpenseForm;
