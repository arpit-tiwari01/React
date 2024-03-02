import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-orange-700 text-white text-center text-3xl  p-4 rounded-3xl  m-6'>User: {userid}</div>
  )
}

export default User