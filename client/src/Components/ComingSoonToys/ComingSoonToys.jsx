


import React from 'react'
import { Link } from 'react-router-dom'
import UserToyItem from '../UserToyItem/UserToyItem'
import batman_toy from '../images/batmantoy.jpg'
import batman_toy_image from '../images/batmantoyimage.png'
import robin_toy from '../images/robintoy.jpg'
import robin_toy_image from '../images/robintoyimage.jpg'
import jokertoy from '../images/jokertoy.jpg'
import jokertoyimage from '../images/jokertoyimage.jpg'
import '../ComingSoonToys/ComingSoonToys.css'
import user_toy_data from '../UserToyData/UserToyData'





        const ComingSoonToys = () => {


          return (
            <>

                <div className={'coming-toys-container'}>

                    <div className={'coming-toys-header-wrapper'}>
                             <div><div><h3>Coming Soon Toys</h3></div></div>
                    </div>


                    <div className={'coming-toys-wrapper'}>
                        <div>
                        {user_toy_data.filter((data) => data.name === 'batman').map((data, index) => {
                            return (
                                <Link className={'coming-link'} to="/batman" key={index}>
                                    <UserToyItem id={data.id}
                                        name={data.name} 
                                       image={data.image}
                                         hoverImage={data.hoverImage}
                                         price={data.price}
                                         new_price={data.new_price}
                                          />
                                </Link>
                            )
                        })}

                        </div>


                        <div>
                        {user_toy_data.filter((data) => data.name === 'robin').map((data, index) => {
                            return (
                                <Link className={'coming-link'} to="/robin" key={index}>
                                    <UserToyItem id={data.id}
                                        name={data.name} 
                                       image={data.image}
                                         hoverImage={data.hoverImage}
                                         price={data.price}
                                         new_price={data.new_price}
                                          />
                                </Link>
                            )
                        })}

                        </div>



                        <div>
                        {user_toy_data.filter((data) => data.name === 'joker').map((data, index) => {
                            return (
                                <Link className={'coming-link'} to="/joker" key={index}>
                                    <UserToyItem id={data.id}
                                        name={data.name} 
                                       image={data.image}
                                         hoverImage={data.hoverImage}
                                         price={data.price}
                                         new_price={data.new_price}
                                          />
                                </Link>
                            )
                        })}

                        </div>




                    </div>




                </div>


            </>
          )
        }



        export default ComingSoonToys