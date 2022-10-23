import React from 'react';
import CoffeeList from './CoffeeList';
import NewCoffeeForm from './NewCoffeeForm';
import { v4 } from 'uuid';
import CoffeeDetail from './CoffeeDetail';

class CoffeeControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedCoffee: null,
      mainCoffeeList: [
        {
          name: 'Arabica',
          origin: 'Ethiopian',
          price: 10,
          roast: 'light',
          lbs: 10,
          id: v4()
        },
        {
          name: 'Robusta',
          origin: 'Ethiopian',
          price: 15,
          roast: 'medium',
          lbs: 7,
          id: v4()
        },
        {
          name: 'Liberica',
          origin: 'Venezuela',
          price: 15,
          roast: 'dark',
          lbs: 3,
          id: v4()
        }
      ]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.selectedCoffee != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedCoffee: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewCoffeeToList = (newCoffee) =>{
    const newMainCoffeeList = this.state.mainCoffeeList.concat(newCoffee);
    this.setState({
      mainCoffeeList: newMainCoffeeList,
      formVisibleOnPage: false});
  }

  handleChangingSelectedCoffee = (id) => {
    const selectedCoffee = this.state.mainCoffeeList.filter(coffee => coffee.id === id)[0];
    this.setState({selectedCoffee: selectedCoffee});
  }

  handleSellCoffee = (id) =>{
    const newMainCoffeeList = this.state.mainCoffeeList;
    const targetCoffee = newMainCoffeeList.find(coffee => coffee.id === id);

    if(targetCoffee.lbs > 0){
      targetCoffee.lbs--;
    }

    this.setState({mainCoffeeList: newMainCoffeeList});
  }

  handleAddBurlapSack = (id) =>{
    const newMainCoffeeList = this.state.mainCoffeeList;
    const targetCoffee = newMainCoffeeList.find(coffee => coffee.id === id);

    targetCoffee.lbs += 130;

    this.setState({mainCoffeeList: newMainCoffeeList});
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedCoffee != null){
      currentlyVisibleState = <CoffeeDetail
        coffee = {this.state.selectedCoffee}
        onClickingSell = {this.handleSellCoffee}
        onClickingAddBurlapSack = {this.handleAddBurlapSack}/>
      buttonText = "Return to Coffee List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewCoffeeForm onAddNewCoffee={this.handleAddingNewCoffeeToList}/>
      buttonText='Return to Coffee List';
    } else {
      currentlyVisibleState=<CoffeeList 
        coffeeList={this.state.mainCoffeeList}
        onCoffeeSelection = {this.handleChangingSelectedCoffee}/>
      buttonText='Add new Coffee';
    }

    return(
      <div>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </div>
    );
  }
}

export default CoffeeControl;