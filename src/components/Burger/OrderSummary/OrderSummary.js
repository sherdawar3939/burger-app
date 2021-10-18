import React from "react";
import Auxiliary from "../../../hoc/Auxiliary";

const oderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
    .map(igKey=>{
        return (
            <li key={igKey}>
              <span style={{textTransform:'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
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
        </Auxiliary>
    )
}

export default oderSummary