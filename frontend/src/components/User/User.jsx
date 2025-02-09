import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const {id}= useParams()
  return (
    <div className='text-center text-4xl text-orange-600 bg-gray-500 m-4 p-3'>Users : {id}</div>
  )
}

export default User