import React from "react";
import PropTypes from 'prop-types';



function CoffeeDetail(props){
  const { coffee, onClickingSell, onClickingAddBurlapSack } = props;

  return (
    <React.Fragment>
      <h1>Coffee Details</h1>
      <h3>{coffee.name} - ${coffee.price}</h3>
      <p>Amount: {coffee.lbs}lbs</p>
      <button onClick={()=>onClickingSell(coffee.id)}>Sell coffee</button>
      <br/>
      <br/>
      <button onClick={()=>onClickingAddBurlapSack(coffee.id)}>Add burlap sack</button>
      <hr/>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingSell: PropTypes.func,
  onClickingAddBurlapSack: PropTypes.func
};
export default CoffeeDetail;