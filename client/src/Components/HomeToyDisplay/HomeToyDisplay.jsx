



import React, { useEffect, useState } from 'react'
import mariotoy from '../images/mariotoy.png';
import mariotoyimage from '../images/mariotoyimage.png';
import lugitoy from '../images/Luigitoy.png';
import lugitoyimage from '../images/Luigitoyimage.png';
import spidermantoy from '../images/spidermantoy.png'
import spidermantoyimage from '../images/spiderman.png'
import wonderwomantoy from '../images/wonderwomantoy.png'
import wonderwomantoyimage from '../images/WonderWomanimage.png'
import clifordbigredtoy from '../images/Cliffordbigredtoy.png'
import clifordbigredtoyimage from '../images/cliffordthebigredimage.png'
import captainamerica from '../images/captainamerica.png'
import captainamericaimage from '../images/captainamericaimage.png'
import { Link } from 'react-router-dom'
import UserToyItem from '../UserToyItem/UserToyItem'
import user_toy_data from '../UserToyData/UserToyData';
import '../HomeToyDisplay/HomeToyDisplay.css'






    const HomeToyDisplay = () => {
            return (
                <>
                    <div className={'home-toy-display-container'}>
                        <div className={'home-toy-display-wrapper'}>

                            <div>
                            {user_toy_data.filter((data) => data.name === 'mario').map((data, index) => {
                                return (
                                    <Link className={'toy-link'} to="/mario" key={index}>
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
                            {user_toy_data.filter((data) => data.name === 'lugi').map((data, index) => {
                               return (
                                <Link  className={'toy-link'}  to="/lugi" key={index}>
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
                            {user_toy_data.filter((data) => data.name === 'spider man').map((data, index) => {
                               return (
                                <Link  className={'toy-link'}  to="/spiderman" key={index}>
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
                            {user_toy_data.filter((data) => data.name === 'wonder woman').map((data, index) => {
                                return (
                                    <Link  className={'toy-link'}  to="/wonderwoman" key={index}>
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
                            {user_toy_data.filter((data) => data.name === 'cliford').map((data, index) => {
                                return (
                                    <Link  className={'toy-link'}  to="/cliford" key={index}>
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
                              {user_toy_data.filter((data) => data.name === 'captain america').map((data, index) => {
                                 return (
                                    <Link  className={'toy-link'}  to="/captainamerica" key={index}>
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






    export default HomeToyDisplay