

import React, { useContext } from "react";
import { BACKEND_URL } from "../../App";
import { ToyContext } from "../../Context/ToyContextProvider";
import '../ToyCart/ToyCart.css'
import user_toy_data from "../UserToyData/UserToyData";


const ToyCart = () => {

        const {user_toy_data, originalCartItems, selectedSizes,  TotalCartAmount, RemoveCartItems} = useContext(ToyContext)

    return (
        <>
            <div className={'toy-cart-container'}>

                <div className={'toy-cart-wrapper'}>

                    <div><p>Products</p></div>
                    <div><p>Title</p></div>
                    <div><p>Price</p></div>
                    <div><p>Quantity</p></div>
                    <div><p>Size</p></div>
                    <div><p>Total</p></div>
                    <div><p>Remove</p></div>

                </div>

                <div><hr /></div>




               
                   {user_toy_data.map((data) => {
                      if(originalCartItems[data.id] > 0) {
                        return (
                            <div className={'toy-cart-wrapper-two'}>
                                <div><img src={data.image} alt=""></img></div>
                                <div ><p>{data.description}</p></div>
                                <div className={'price'}><p>$ {data.new_price}</p></div>
                                <div><button>{originalCartItems[data.id]}</button></div>
                                <div><p>{selectedSizes[data.id] || 'N/A'}</p></div>
                                <div className={'price-two'}><p>$ {data.new_price * originalCartItems[data.id]}</p></div>
                                <div className={'remove'}><div onClick={() => RemoveCartItems(data.id)}>X</div></div>
                            </div>
                        )
                      } else {
                            return null
                      }
                   })}



                         <div><hr /></div>




                         <br />





                         <div className={'toy-cart-wrapper-three'}>

                            <div>
                                <div><h3>Cart Totals</h3></div>
                                <div className={'subtotal'}><p>Subtotal</p><p>$ {TotalCartAmount()}</p></div>
                                    <div> <hr /></div>
                                <div className={'ship'}><p>Shipping Fee</p><p>Free</p></div>
                                       <div> <hr /></div>
                                <div className={'total'}><span>Total</span><p>$ {TotalCartAmount()}</p></div>
                                    <div> <hr /></div>
                                <div className={'button'}><button>PROCEED TO CHECKOUT</button></div>
                            </div>


                            <div>
                                <div> <p>If you have a promo code, Enter it here</p></div>
                                <div>
                                <input type="text" value={'enter promo code'}></input>
                                <button className={'button-sub'}>Submit</button>
                                </div>
                            </div>

                         </div>











            </div>



        </>
    )
}



export default ToyCart