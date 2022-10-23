import React from "react";
import PropTypes from "prop-types";

function Coffee(props){
  return (
    <React.Fragment>
      <div className="coffeeList" onClick = {()=>props.whenCoffeeClicked(props.id)}>
        <h2>{props.name}</h2>
        <h3>{props.origin}</h3>
        <h3>{props.price}</h3>
        <p><em>{props.roast}</em></p>
        <h3>lbs: {props.lbs}</h3>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.number,
  roast: PropTypes.string,
  lbs: PropTypes.number,
  id: PropTypes.string,
  whenCoffeeClicked: PropTypes.func
};

export default Coffee;