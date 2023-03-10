import React, { useEffect, useState } from 'react'

const Cards = ({ imageUrl, name }) => {
  return (
    <button className='flex flex-row w-full m-2 bg-gray-800 rounded rounded-b rounded-tl hover:bg-gray-500 hover:opacity-80'>
      <div className='w-1/4 h-20'>
        <img className='w-full h-20 rounded-tl rounded-bl' src={imageUrl} />
      </div>
      <div className='items-center m-6'>
        <h1 className='self-center text-white'><strong>{name}</strong></h1>
      </div>
    </button>
  )
}

export default Cards;