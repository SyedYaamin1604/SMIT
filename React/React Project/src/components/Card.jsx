// function Card(props) {
//     <>
//         <h1>Card Title</h1>
//         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, maxime?</p>
//         <p>Rs 3000</p>
//     </>
// }



import React from 'react'

const Card = ({title, description}) => {
    return (
        <>
            <div style={{
                padding: "10px",
                margin: "20px",
                borderRadius: "20px",
                border: "2px solid black",
            }}>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </>
    )
}

export default Card