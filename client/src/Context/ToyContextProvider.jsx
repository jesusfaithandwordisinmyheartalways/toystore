




import React, { createContext, useEffect, useState } from "react";
import { BACKEND_URL } from "../App";
import user_toy_data from "../Components/UserToyData/UserToyData";


export const ToyContext = createContext(null)



const ToyContextProvider = ({ children }) => {

    const OriginalCart = () => {
        let cart = {}
        for(let i = 0; i < user_toy_data.length + 1; i++) {
              cart[i] = 0
        }
          return cart
      }




      
      const [originalCartItems, setOriginalCartItems] = useState(OriginalCart());
      const [selectedSizes, setSelectedSizes] = useState({}); // Track selected sizes


      // Function to update the selected size
      const updateSelectedSize = (itemId, size) => {
    setSelectedSizes((sizes) => ({ ...sizes, [itemId]: size }));
  };


      const TotalCartAmountItems = () => {
        let totalCartAmount = 0;
         for(const index in originalCartItems) {
             if(originalCartItems[index] > 0 ) {
               totalCartAmount += originalCartItems[index]
             }
         }
              return totalCartAmount
      }


      const TotalCartAmount = () => {
          let totalCartAmount = 0;
          for(const index in originalCartItems) {
               if(originalCartItems[index] > 0 ) {
                  const CartItemInfo =  user_toy_data.find((product) => product.id === Number(index))
                  totalCartAmount += originalCartItems[index] * CartItemInfo.new_price
               }
          }
                  return totalCartAmount;
      }

      
          const AddCartItems = (items) => {
              setOriginalCartItems((cartItems) => ({...cartItems, [items]: cartItems[items] + 1} ))
          }



          const RemoveCartItems = (items) => {
              setOriginalCartItems((cartItems) => ({...cartItems,[items]: cartItems[items] - 1} ))
          }


          
          const ToyContextValue = { selectedSizes, updateSelectedSize, user_toy_data, originalCartItems, TotalCartAmountItems, TotalCartAmount, AddCartItems, RemoveCartItems}

             return (
                  <>

                    <ToyContext.Provider value={ToyContextValue}>
                            {children}
                    </ToyContext.Provider>




                </>
  )
}






export default ToyContextProvider
