import React, { Component } from "react";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Button from "../../Ui/Button/Button";

class  OrderSummary extends Component {
  
    render () {
        const ingredientsSummary = Object.keys(this.props.ingredients)
        .map(igKey=>{
            return (
                <li key={igKey}>
                  <span style={{textTransform:'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>
            )
        })
        return (
                <Auxiliary>
                  <h1>Your order</h1>
                  <p>A delecious Burger contains the following ingredients</p>
                  <ul>
                   {ingredientsSummary}
                  </ul>
                  <p>Do you want to continue</p>
                   <p><strong>Total Price: {this.props.price.toFixed(2)} </strong></p>
                   <Button  btnType="Danger" clicked={this.props.cancel} >Cancel</Button>
                   <Button btnType="Success" clicked={this.props.continued} >Continue</Button>
        
                </Auxiliary>
            )
    }
} 

export default OrderSummary