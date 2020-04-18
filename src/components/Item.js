import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


const Item = () => {
    const [data, setData] = useState ([])
    useEffect(() => {
        const URL = 'http://35.240.201.155:3000/api/v1/wanderlink/show/idn/destination'
        axios
            .get(URL)
            .then(response => {
                const data = response.data
                setData(response.data)
                console.log(data);
            })
    }, [])

    const showData = data.map((item, index) => 
    <div key={index} className="col-4">
        <div className="card mt-4">
            <img className="card-img-top" src={`http://35.240.201.155:3000/${item.images}`} width="250px" height="350px" />
            <div className="card-body">
                <h5 className="card-title">{item.destinationName}</h5>
                    <p className="card-text">{item.province}</p>
                    <Link to={`/article/${item.id}`} className="btn btn-info">Read more &rarr;</Link>
        </div>
        </div>
    </div>)
    return(
        <div className="container">
            <div className="row">
                {showData}

            </div>

        </div>
    )
}



export default Item;