import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,SHOW_TOOL} from './action-types/cart-actions'

//Add to Cart
export const addToCart= (name)=>{
    return{

        type: ADD_TO_CART,

        name 
    }        
}
//Show Tool 
export const showTool=(name)=>{
    return{
        type: SHOW_TOOL,
        
        name
    }
}
//remove Tool action
export const removeItem=(name)=>{
    return{
        type: REMOVE_ITEM,
        name
    }
}
//subtract qt action
export const subtractQuantity=(name)=>{
    return{
        type: SUB_QUANTITY,
        name
    }
}
//add qt action
export const addQuantity=(name)=>{
    return{
        type: ADD_QUANTITY,
        name
    }
}