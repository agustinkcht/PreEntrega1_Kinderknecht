import React from 'react'
import './itemListContainer.css'

const ItemListContainer = ({ greeting }) => {
    return(
        <div className='greetingContainer'>
            <h1>{greeting}</h1>
        </div>
    )

}

export default ItemListContainer
