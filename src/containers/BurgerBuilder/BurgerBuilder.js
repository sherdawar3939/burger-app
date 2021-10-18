import React, {Component} from "react";
import Auxiliary from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/Ui/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENTS_PRICE = {
  salad:.5,
  cheese:.4,
  meat:.3,
  bacon:.12
}

class BurgerBuilder extends Component {

  state = {
    ingredients:{
      salad:0,
      cheese:0,
      meat:0,
      bacon:0
    },
    totalPrice:4,
    purchasable:false,
    purchasing:false
  }

  updatePurchaseState (ingredients) {
    const sum = Object.keys(ingredients)
    .map(igKey=>{
      return ingredients[igKey];
    }).reduce((sum,el)=>{
      return sum + el;
    }, 0);

    this.setState({purchasable: sum > 0});
  }

  addBurgerHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredient = {
      ...this.state.ingredients
    }
    updatedIngredient[type] = updatedCount;
    const priceAddition = INGREDIENTS_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({totalPrice:newPrice, ingredients:updatedIngredient});
    this.updatePurchaseState(updatedIngredient)

  }

  removedBurgerHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if(oldCount <= 0){
      return null;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredient = {
      ...this.state.ingredients
    }
    updatedIngredient[type] = updatedCount;
    const priceDeduction = INGREDIENTS_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({totalPrice:newPrice, ingredients:updatedIngredient});
    this.updatePurchaseState(updatedIngredient)

  }

  purchaseHandler = () => {
    this.setState({purchasing:true})
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing:false})
  }

  
    render () {
         
      const disabledInfo = {...this.state.ingredients};
        for (let key in disabledInfo) {
          disabledInfo[key] = disabledInfo[key] <= 0;
        }
     
        return (
          <Auxiliary>
           <Modal show={this.state.purchasing} closeModal={this.purchaseCancelHandler}>
            <OrderSummary 
             ingredients={this.state.ingredients} />
           </Modal> 
           <Burger ingredients={this.state.ingredients}/>
           <BuildControls 
            addIngredients={this.addBurgerHandler}
            removeIngredients={this.removedBurgerHandler}
            disabled={disabledInfo}
            price={this.state.totalPrice}
            purchasable={this.state.purchasable}
            purchased={this.purchaseHandler}
            />
          </Auxiliary>
        )
    }
}
export default BurgerBuilder