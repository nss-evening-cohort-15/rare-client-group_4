import React, { useState, createContext } from "react"

export const PostContext = createContext()

export const PostProvider = (props) => {
    const [posts, setPosts] = useState([])

    const getPosts = () => {
        return fetch("http://localhost:8088/posts")
        .then(res => res.json())
        .then(setPosts) 
    }

    const addPost = postObj => {
        return fetch("http://localhost:8088/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postObj)
        })
        .then(getPosts)
    }
    return (
        <PostContext.Provider value={{
            posts, getPosts, addPost
        }}>
            {props.children}
        </PostContext.Provider>
    )
}