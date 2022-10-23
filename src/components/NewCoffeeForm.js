import React from 'react';
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewCoffeeForm(props){

  function handleNewCoffeeFormSubmission(event) {
    event.preventDefault();

    const newCoffee = {};
    newCoffee.name = event.target.name.value;
    newCoffee.origin = event.target.origin.value;
    newCoffee.price = parseInt(event.target.price.value);
    newCoffee.roast = event.target.roast.value;
    newCoffee.id = v4();

    props.onAddNewCoffee(newCoffee);
  }

  return(
    <React.Fragment>
      <form onSubmit={handleNewCoffeeFormSubmission}>
        <label for="name">Name: </label>
        <input
          type='text'
          name='name'
          placeholder='Coffee name' />
          <br/>
        <label for="origin">Origin: </label>
        <input
          type='text'
          name='origin'
          placeholder='Origin' />
          <br/>
        <label for="price">Price: </label>
        <input 
          type='number'
          name='price'
          placeholder='Price'/>
          <br/>
        <label for="roast">Roast: </label>
        <input
          type='text'
          name='roast'
          placeholder='Roast' />
          <br/>
        <button type='submit'>Add</button>
        <hr/>
      </form>
    </React.Fragment>
  );
};

NewCoffeeForm.propTypes = {
  onAddNewCoffee: PropTypes.func
};

export default NewCoffeeForm;