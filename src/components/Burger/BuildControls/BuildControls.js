import React from "react";
import './BuildControls.css';
import BuildControl from "../BuildControl/BuildControl";

const buildControls = (props) => {
  const control = [
    {label:'Salad', type:'salad'},
    {label:'Bacon', type:'bacon'},
    {label:'Cheese', type:'cheese'},
    {label:'Meat', type:'meat'}
]
  return (
    <div className="BuildControls">
     <p>Current Price: <strong> {props.price.toFixed(2)} </strong></p>
    {
      control.map(crl=>(
        <BuildControl 
          key={crl.label} 
          label={crl.label}
          added={()=>props.addIngredients(crl.type)}
          remove={()=>props.removeIngredients(crl.type)}
          disabled={props.disabled[crl.type]}
          />
    ))
  };
   <button className="OrderButton"
     disabled={!props.purchasable}
     onClick={props.ordered}>ORDER NOW</button>
   </div>
  )
};

export default buildControls