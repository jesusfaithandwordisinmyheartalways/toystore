



import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ToyContext } from '../Context/ToyContextProvider'
import ToyProductDisplay from '../Components/ToyProductDisplay/ToyProductDisplay'
import SimilarToys from '../Components/SimilarToys/SimilarToys'
import user_toy_data from '../Components/UserToyData/UserToyData'
import '../Pages/CSS/ToyProduct/ToyProduct.css'



const ToyProduct = () => {
        const [toyProductData, setToyProductData] = useState(true)
        const {user_toy_data} = useContext(ToyContext)
        const {productId} = useParams()
        const inventory = user_toy_data.find((data) => data.id === Number(productId))
         
        useEffect(() => {
            setToyProductData(true)
        }, [toyProductData])
    
        if(!inventory) {
            return <div>product not found</div>
        }
        
       

    return toyProductData ? (
        <div>
            <ToyProductDisplay display={inventory} />
            <SimilarToys toyCategory={toyProductData.id} toyId={toyProductData.category} />
        </div>
    ): null
}


export default ToyProduct