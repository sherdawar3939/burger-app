import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import './Burger.css';

const burger = (props) => {

    let transformIngredients = Object.keys(props.ingredients)
    .map(igKey=>{
        return [...Array(props.ingredients[igKey])].map((_,i)=>{
            return <BurgerIngredient key={igKey + i} type={igKey}/>
        })
    }).reduce((prev, curr)=>{
        return prev.concat(curr);
    }, [])

    if (transformIngredients.length === 0) {
       transformIngredients = <p>Please start adding  ingredients</p>
    }
    return (
        <div className="Burger">
         <BurgerIngredient type="bread-top"/>
          {transformIngredients}
         <BurgerIngredient type="bread-bottom"/>
        </div>
    )
}

export default burger