


import React, {useState, useEffect} from 'react'
import user_toy_data from '../Components/UserToyData/UserToyData'
import UserToyItem from '../Components/UserToyItem/UserToyItem'
import '../Pages/CSS/ToyCategory/ToyCategory.css'



const ToyCategory = (props) => {

        const [allToyProducts, setAllToyProducts] = useState([])


        const AllProductInformation = async () => {
            try {
                const response = await fetch('http://localhost:3000/allproducts'); // Fetch data from the server.
                 const data = await response.json(); // Convert the response to JSON.
                setAllToyProducts(data); // Update the state with the fetched 
            }catch(error) {
                console.error('User Error fetching data:', error); // Handle any errors.
            }
        }


            useEffect(() => {
                AllProductInformation()

            }, [])



  return (
   <>

            <div className={'toy-category-container'}>

                <div className={'toy-category-wrapper'}>
                    <div><div><span>Showing 1 - 5</span> out of 5 toys</div></div>
                </div>

                <div className={'toy-category-image-wrapper'}>
                    <div><div><img src={props.image} alt=''></img></div></div>
                </div>

            </div>





            <div className={'toy-category-container-two'}>

                <div className={'toy-category-components-wrapper'}>
                    <div>
                        {user_toy_data.map((elements, index) => {
                            if(props.category === elements.category) {
                                return (
                                    <UserToyItem key={index} id={elements.id} 
                                    name={elements.name} 
                                    category={elements.category}
                                    image={elements.image}
                                    hoverImage={elements.hoverImage}
                                    price={elements.price}
                                    new_price={elements.new_price} 
                                    />
                                )
                            } else {
                                return null
                            }
                        })}
                    </div>
                    
                </div>




            </div>




   </>
  )
}





export default ToyCategory
