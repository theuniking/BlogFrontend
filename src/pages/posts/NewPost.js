import React from "react";
import {useNavigate} from "react-router-dom";
import PostForm from "./components/PostForm";
import client from "../../client";

function NewPost() {

    const navigate = useNavigate()


    const handleSubmit = async ({title,body}) => {
        await client.post("/posts",{title,body})
        navigate(-1)
    }
    return (
        <>
            <button className="ui button" onClick={() => navigate(-1)}>Go Back</button>
            <h1 className="ui header">Create Post</h1>
            <PostForm onSubmit={handleSubmit}/>
        </>
    )
}

export default NewPost