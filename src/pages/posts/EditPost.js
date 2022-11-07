import React, {useEffect, useState} from "react";
import PostForm from "./components/PostForm";
import {useNavigate, useParams} from "react-router-dom";
import client from "../../client";

function EditPost() {

    const navigate = useNavigate()
    const params = useParams() // last thing
    const [loading,setLoading] = useState(true)
    const [post,setPost] = useState()

    useEffect(() => {
        client.get(`/posts/${params.id}`)
            .then((res) => {setPost(res.data)
            setLoading(false)
            })
    },[params.id]) // params . id is essential because it loads only when we get it

    if(loading) {
        return (
            <div className="ui text active loader">Loading</div> // loader to prevent using nullable post, it's null at first
        )
    }

    const handleSubmit = ({title,body}) => {
        client.patch(`/posts/${params.id}`,{title,body})
            .then(() => navigate(-1))
    }

    return (
        <>
            <button className="ui button" onClick={() => navigate(-1)}>Go Back</button>
            <h1 className="ui header">Edit Post</h1>
            <PostForm onSubmit={handleSubmit} initialValues={post}/>
        </>
    )
}

export default EditPost