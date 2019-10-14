import Tools from '../pages/renttools/tools.json';
import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, SHOW_TOOL } from '../actions/action-types/cart-actions'

const initState = {
    tools: Tools,
    searchInput: '',
    addedTools: [],
    total: 0,
    showTool: []
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

    //Show Single Tool Page
    if(action.type === SHOW_TOOL) {
        let showTool = state.tools.find(Tool => Tool.name === action.name)
        return {
            ...state,
            showTool: [showTool]
        } 
    }
    // Inside Cart Compenent

    //Remove Tool From Cart
    if(action.type === REMOVE_ITEM){
        let toolToRemove= state.addedTools.find(Tool=> action.name === Tool.name)
        let new_tools = state.addedTools.filter(Tool=> action.name !== Tool.name)
        
        //calculating the total
        let newTotal = state.total - (toolToRemove.deposit * toolToRemove.quantity )
        console.log(toolToRemove)
        return{
            ...state,
            addedTools: new_tools,
            total: newTotal
        }
    }

    //Add Quantity
    if(action.type=== ADD_QUANTITY){
        let addedTool = state.tools.find(Tool=> Tool.name === action.name)
          addedTool.quantity += 1 
          let newTotal = state.total + addedTool.deposit
          return{
              ...state,
              total: newTotal
          }
    }

    //Subtract Quantity
    if(action.type=== SUB_QUANTITY){  
        let addedTool = state.tools.find(Tool=> Tool.name === action.name) 
        //if the qt == 0 then it should be removed
        if(addedTool.quantity === 1){
            let new_tools = state.addedTools.filter(Tool=>Tool.name !== action.name)
            let newTotal = state.total - addedTool.deposit
            return{
                ...state,
                addedTools: new_tools,
                total: newTotal
            }
        }

    else{
        addedTool.quantity -= 1
        let newTotal = state.total - addedTool.deposit
        return{
            ...state,
            total: newTotal
        }
    }    
  }
  return state
}

export default cartReducer;