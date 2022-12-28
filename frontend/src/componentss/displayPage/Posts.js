import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import "./DisplayData.css"
function Posts() {
    const [data, setData] = useState([]);
    const fetchData = () => {
        fetch("/posts")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setData(data);
            });
    };
    useEffect(() => {
        fetchData();
    }, []);



    return (
        <div>
            {data.map((data, index) => {
                return (
                    <div key={index} className="display-card-container">
                        <div>
                            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
                        </div>
                        <div  className="card-info" >
                            <h3>{data.title}</h3>
                            <div>{data.description}</div>
                        </div>



                    </div>
                );
            })}
     
        </div>
    );
}


export default Posts
