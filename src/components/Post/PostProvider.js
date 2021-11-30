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

    const updatePost = post => {
        return fetch(`http://localhost:8088/posts/${post.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"

            },
            body: JSON.stringify(post)
        })
            .then(getPosts)
    }

    const deletePost = postId => {
        return fetch(`http://localhost:8088/posts/${postId}`, {
            method: "DELETE"
        })
            .then(getPosts)
    }

    const getPostById = (postId) => {
        return fetch(`http://localhost:8088/posts/${postId}
        `)
            .then(res => res.json())
    }

    return (
        <PostContext.Provider value={{
            posts, getPosts, addPost, updatePost, deletePost, getPostById
        }}>
            {props.children}
        </PostContext.Provider>
    )
}