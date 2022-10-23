import React  from "react";
import Coffee from './Coffee';
import PropTypes from "prop-types";

function CoffeeList(props){
  return(
    <React.Fragment>
      {props.coffeeList.map((coffee, index) =>
        <Coffee 
          whenCoffeeClicked ={props.onCoffeeSelection}
          name ={coffee.name}
           origin={coffee.origin}
           price={coffee.price}
           roast={coffee.roast}
           lbs={coffee.lbs}
           id = {coffee.id}
           key={index}/>
      )}
    </React.Fragment>
  )
}

CoffeeList.propTypes = {
  coffeeList: PropTypes.array,
  onCoffeeSelection: PropTypes.func
};

export default CoffeeList;