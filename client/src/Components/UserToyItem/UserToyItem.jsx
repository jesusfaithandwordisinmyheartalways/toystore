


import React, { useState } from 'react'
import '../UserToyItem/UserToyItem.css'
import { Link } from 'react-router-dom'


const UserToyItem = (props) => {

        const [imageIsHovered, setImageIsHovered] = useState(false);

        const UserImageClicked = async () => {
            try {
              const response = await fetch('http://localhost:3000/allproducts', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                    body: JSON.stringify({ id: props.id })
              })
                    if(!response.ok) {
                      throw new Error('Failed to update click count')
                    }
                    console.log(`Click count updated for product ID: ${props.id}`)
              }catch(error) {
                    console.error('Error updating click count:', error);
            }
        }

        
      return (
        <>

            <div className={'user-toy-item-container'}>
                <div className={'user-toy-item-wrapper'}>

                <Link to={`/product/${props.id}`}><div><div><img onClick={() => { UserImageClicked(); window.scrollTo(0,0) }} alt={props.name}
                onMouseOver={() => setImageIsHovered(true)} onMouseOut={() => setImageIsHovered(false)} 
                src={imageIsHovered && props.hoverImage ? props.hoverImage : props.image} ></img></div></div></Link>

                    <div className={'user-toy-name-wrapper'} ><div><p>{props.name}</p></div></div>

                    <div className={'user-toy-price-wrapper'}>
                        <div className={'user-toy-price-text'}><div><p>$ {props.price}</p></div></div>
                        <div ><div><p>$ {props.new_price}</p></div></div>
                    </div>



                </div>


            </div>







        </>
      )
    }






    export default UserToyItem