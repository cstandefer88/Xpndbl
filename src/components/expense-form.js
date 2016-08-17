import React from 'react';


class ExpenseForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      descriptorValue: '',
      amountValue: ''
    }
  }

  _handleTextChange(event) {
    this.setState({
      descriptorValue: event.target.value
    });
  }

  _handleNumberChange(event) {
    this.setState({
      amountValue: event.target.value
    });
  }


  _handleInput(event) {
    event.preventDefault();
    this._update();
    this.setState({
      descriptorValue: '',
      amountValue: ''
    })
  }


  _update(){
    var category = this.refs.categoryEntry.value;
    var descriptor = this.refs.descriptorEntry.value;
    var amount = this.refs.amountEntry.value;
    var expense = { category, descriptor, amount }
    this.props.expenseUpdate(expense);
  }

  _renderCategoryOption(category) {
    return <option key={category} value={category}>{category}</option>
  }
  render(){
    return(
      <div>

        <form onSubmit={this._handleInput.bind(this)}>
          <div>
            <p>Pick the category of your purchase</p>
            <select ref="categoryEntry" defaultValue="null">
              { this.props.categories.map(this._renderCategoryOption)}
            </select>
          </div>

          <p>What was the purchase? <textarea rows="4" cols="20" ref="descriptorEntry" value={this.state.descriptorValue} onChange={this._handleTextChange.bind(this)}></textarea></p>

          <p>Enter the amount for this purchase: $<input type="number" ref="amountEntry" name="amount" value={this.state.amountValue} onChange={this._handleNumberChange.bind(this)} /></p>

          <input type="submit" value="Submit To Results" />
        </form>

      </div>
    );
  }
}


export default ExpenseForm;
