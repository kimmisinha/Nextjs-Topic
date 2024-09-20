import React from 'react'

function page({params}) {
    console.log(params)
  return (
    <div>
        <h2>{params.id}</h2>
        <h3>kimmi</h3>
    </div>
  )
}

export default page