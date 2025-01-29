

import React from 'react'
import { Link } from 'react-router-dom'
import UserToyItem from '../UserToyItem/UserToyItem'
import blackwidow from '../images/BlackWidowtoy.png'
import blackwidowimage from '../images/BlackWidowimage.png'
import blue_todd_toy from '../images/BlueToadtoy.jpg'
import blue_todd_toy_image from '../images/BlueToadimage.jpg'
import yoshi_toy from '../images/Yoshitoy.jpg'
import yoshi_toy_image from '../images/Yoshitoyimage.png'
import user_toy_data from '../UserToyData/UserToyData'
import '../PopularToys/PopularToys.css'



    const PopularToys = () => {


      return (
        <>
            <div className={'popular-toys-container'}>

                <div className={'popular-toys-header'}>
                    <div><div><h3>Popular Toys</h3></div></div>
                </div>


                <div className={'popular-toys-wrapper'}>

                    <div>
                        {user_toy_data.filter((data) => data.name === 'black widow').map((data, index) => {
                            return (
                                <Link className={'popular-link'} to="/blackwidow" key={index}>
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
                        {user_toy_data.filter((data) => data.name === 'blue todd').map((data, index) => {
                            return (
                                <Link className={'popular-link'} to="/bluetodd" key={index}>
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
                        {user_toy_data.filter((data) => data.name === 'yoshi').map((data, index) => {
                            return (
                                <Link className={'popular-link'} to="/yoshi" key={index}>
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



    export default PopularToys