import Tools from '../pages/renttools/tools.json';
import { ADD_TO_CART } from '../actions/action-types/cart-actions';

const initState = {
    tools: Tools,
    searchInput: "",
    addedTools: [],
    total: 0
}

const cartReducer= (state = initState,action)=>{
   
    //INSIDE RENTTOOLS COMPONENT
    if(action.type === ADD_TO_CART){
          let addedTool = state.tools.find(Tool=> Tool.name === action.name)
          //check if the action id exists in the addedTool
         let existed_tool= state.addedTools.find(Tool=> action.name === Tool.name)
         if(existed_tool)
         {
            addedTool.quantity += 1 
             return{
                ...state,
                 total: state.total + addedTool.deposit 
                  }
        }
         else{
            addedTool.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedTool.deposit 
            
            return{
                ...state,
                addedTools: [...state.addedTools, addedTool],
                total : newTotal
            }
            
        }
    }
    else{
        return state
    }
  }

export default cartReducer;