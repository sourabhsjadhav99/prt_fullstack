import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css"
import axios from 'axios';

import "./Form.css"
import NavBar from "../NavBar";
export default function FormPage() {
    const [data, setData] = useState({
        postImage: "",
        title: "",
        description: "",
    });
    let navigate = useNavigate()
    let formData = new FormData()
    formData.append("postImage", data.postImage)
    formData.append("name", data.title)
    formData.append("description", data.description)

    let config = {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }

    let postData = () => {
        axios.post('/posts', formData, config)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }


    let submitHandler = (e) => {
        e.preventDefault()
        if (data.name, data.description, data.postImage) {
            postData()
            navigate("/displayposts")
        } else {
            alert("All fields required")
        }



    }
    return (
        <div className='App'>
            <NavBar />
            <div className='main-container'>
                <h2>New Post</h2>
                <form action="#" className='form' onSubmit={submitHandler}>
                    <div><input className='input-field' type="text" placeholder='Enter Title' name="title" value={formData.title} onChange={(e) => {
                                setData({ ...data, title: e.target.value });
                            }}/></div>
                    <div>
                        <input type="file" id="formFile"
                        className="input-field"
                            name="postImage"
                            onChange={(e) => {
                                setData({ ...data, postImage: e.target.files[0] });
                            }} />
                    </div>
                    <div><textarea name="description" className='texebox' value={formData.description} onChange={(e) => {
                                setData({ ...data, description: e.target.value });
                            }}></textarea></div>
                    <button type='submit' className='create-post-btn'>Create Post</button>
                </form>
            </div>
        </div>
    )
}