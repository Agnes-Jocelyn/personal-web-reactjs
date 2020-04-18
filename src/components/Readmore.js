import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import axios from 'axios';

const Readmore = () => {
    const {_id} = useParams();
    const [data, setData] = useState({})

    useEffect(() => {
        const URL = 'http://35.240.201.155:3000/api/v1/wanderlink/show/idn/destination'
        axios
            .get(`${URL}/${_id}`)
            .then(res => {
                const data = res.data
                setData(data)
                console.log(data);
            })
    },[])

    const showData = 
    <div className="isidetail">
        <div className="col-8">
        <div className="card mt-4">
            <img className="card-img-top" alt="..." src={`http://35.240.201.155:3000/${data.images}`} width="250px" height="350px" />
            <div className="card-body">
                <h5 className="card-title">Destination Name : {data.destinationName}</h5>
                <p className="card-text">Province : {data.province}</p>
                <p className="card-text">City : {data.city}</p>
                <p className="card-text">City : {data.address}</p>
                <p className="card-text">{data.description}</p>
                <Link to="/article" className="btn btn-info">Back to articles &larr;</Link>
            </div>
        </div>
    </div>
    </div>
    
    return(
        <div className="container">
            <div className="row">
                {showData}
            </div>

        </div>
    )
}

export default Readmore;