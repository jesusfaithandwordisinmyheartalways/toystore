



import React, { useContext } from "react";
import '../ToyProductDisplay/ToyProductDisplay.css'
import { ToyContext } from "../../Context/ToyContextProvider";
import { BACKEND_URL } from "../../App";
import FIVE_STAR from '../images/5-Star-Rating-Review.png'
import user_toy_data from "../UserToyData/UserToyData";


const ToyProductDisplay = ({ display }) => {
        const { AddCartItems , updateSelectedSize } = useContext(ToyContext)


        const handleSizeChange = (e) => {
            const selectedSize = e.target.value;
            updateSelectedSize(display.id, selectedSize); // Update the size in context
          };
        


  return (
    <>
        <div className={'product-display-container'}>
            <div className={'product-display-wrapper'}>

                <div className={'product-display-left-side-images'} >
                    <div ><img src={display.image} alt=""></img></div>
                    <div><img src={ display.image} alt=""></img></div>
                    <div><img src={ display.image} alt=""></img></div>
                    <div><img src={ display.image} alt=""></img></div>

                </div>



                <div className={'product-display-middle-side-images'}>
                    <div><img src={display.image} alt=""></img></div>
                </div>
                

                <div className={'product-display-description'} >
                    <div><h3>{display.description}</h3></div>
                </div>


                <div className={'product-display-star'}>
                    <div><img src={FIVE_STAR} alt=""></img></div>
                    <div><p>(120)</p></div>
                </div>


                <div className={'product-display-price'}>
                    <div style={{ textDecoration: 'line-through'}} ><p>$ {display.price}</p></div>
                    <div style={{color: 'green'}}><p>$ {display.new_price}</p></div>

                </div>



                <div className={'product-display-name'}>
                    <div><p>{display.name} toy on the market</p></div>
                </div>



                <div className={'product-display-size'} >
                    <div><h3>SELECT SIZE</h3></div>
                </div>


                <div className={'product-display-sizes-option'}>
                    <div>
                        <select onChange={handleSizeChange}  className={'select'}>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>

                        </select>
                    </div>
                </div>


                <div className={'product-display-add-to-cart'}>
                    <div><button onClick={() => AddCartItems(display.id)}>ADD TO CART</button></div>
                </div>


                <div className={'product-display-category'}>
                    <div><p><span>Category:</span>Toys, Playful, Household</p></div>
                </div>


                <div className={'product-display-tags'}>
                   <div><p><span>Tags:</span>Modern, Latest</p></div>

                </div>






            </div>







        </div>



    </>
  )
}








export default ToyProductDisplay