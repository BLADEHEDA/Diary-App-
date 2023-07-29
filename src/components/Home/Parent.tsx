import React from 'react'
import Child from './Child'

const Parent = () => {
    const getData=(data)=>{
        console.log('Here is the data:', data  );   
    }
  return (
    <div>
      <h2>her is the parent component </h2>
      <Child
      onSubmit={getData}
      />
    </div>
  )
}

export default Parent
