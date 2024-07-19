import React from 'react'

function showroom() {
    const brand = ["BMW","TATA","Honda","Mercedez"];
    brand.map((item) =>{
        console.log(item);
    });
  return (
    <div>
        <h1>Car Shoroom</h1>
        <ol>
        {
            brand.map((item) =>{
                return <li>{item}</li>
            })
        }
        </ol>
    </div>
  )
}

export default showroom