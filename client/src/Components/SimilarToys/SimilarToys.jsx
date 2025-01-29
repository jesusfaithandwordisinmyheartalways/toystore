


import React, { useContext, useEffect, useState } from 'react'
import '../SimilarToys/SimilarToys.css'
import UserToyItem from '../UserToyItem/UserToyItem'
import user_toy_data from '../UserToyData/UserToyData'
import { ToyContext } from '../../Context/ToyContextProvider'


const SimilarToys = ({ toyCategory, toyId }) => {

        const [isToyRelated, setIsToyRelated] = useState([])
        const {user_toy_data} = useContext(ToyContext)

        useEffect(() => {
            const ToyRelatedProducts = async () => {
                try {
                    const response = await fetch('http://localhost:3000/relatedtoyproducts', {
                        method: "POST",
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json'
                        },
                         body: JSON.stringify({ category: toyCategory })
                        });
                        const data = await response.json();
                        setIsToyRelated(data)
                    }catch(error) {
                        console.error('User Error fetching related products:', error);
                    }
            }
                    ToyRelatedProducts()
                },[toyCategory])



    return (
        <>

                <div className={'toy-related-product-container'}>

                    <div className={'toy-similar-product-wrapper'}>
                         <div><h3> Similar Toy Products</h3></div>
                    </div>

                    <div><hr /></div>



                    <div className={'toy-similar-display-wrapper'}>
                            {user_toy_data.map((data, index) => {
                                if(toyId !== data.id) {
                                    return <div>
                                    <UserToyItem key={index} id={data.id} name={data.name}
                                     image={data.image} 
                                     hoverImage={data.hoverImage}
                                     price={data.price}
                                     new_price={data.new_price}  />
                                    </div>
                                }
                        })}
                        

                    </div>


                </div>



        </>
    )
}



export default SimilarToys
