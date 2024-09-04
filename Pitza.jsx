import React, { useEffect, useState } from 'react'

export default function Pitza() {

    const [pitza,setPitza] = useState([]);

    const getPitza = async ()=>{
        const response = await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
        const data = await response.json();

        console.log(data.recipes);
        setPitza(data.recipes);
    }

    useEffect(()=>{
        getPitza();
    },[])

    return (
        <div className="container-fluid">
            <div className="row">
                {pitza.map(product=>
                    <div className="col-lg-3">
                        <div className="card pitza">
                        <img src={product.image_url} />
                        <h2>{product.title.split(' ').slice(0,3).join(' ')}</h2>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
