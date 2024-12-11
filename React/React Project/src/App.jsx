// import React, { useEffect, useState } from 'react'

// const App = () => {

//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then((response) => console.log(response))
//     setData(response);
//     console.log(data);
//   }, [])

//   return (
//     <>
//       <h1>Hello</h1>



//     </>
//   )
// }

// export default App


import React, { useState } from 'react'
import Card from './components/Card';


const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>Counter {counter}</h1>
      <button onClick={() => { setCounter(counter + 1) }}>Add</button>
      <button onClick={() => { setCounter(counter - 1) }}>Less</button>

      {counter < 18 ? (counter < 10 ? <Card title="Gym" description="You are not Eligible" /> : <Card title="Gym" description="YOu are Eligible with additional fees of 1000" />) : <Card title='Gym' description="You are Eligible" />}

    </>
  )
}

export default App