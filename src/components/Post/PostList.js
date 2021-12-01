import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { PostContext } from "./PostProvider"
import { PostDetail } from "./PostDetail"
import "./Post.css"

export const PostList = () => {

    const { posts, getPosts, searchTerms } = useContext(PostContext)

    const [filteredPosts, setFiltered] = useState([])
    const history = useHistory()

    useEffect(() => {
        getPosts()
    }, [])

    useEffect(() => {
        if (searchTerms !== "") {
            const subset = posts.filter(post => post.title.toLowerCase().includes(searchTerms))
            setFiltered(subset)
        } else {
            setFiltered(posts)
        }
    }, [searchTerms, posts])

    return (
        <>
            <h1>Posts</h1>
            <h2>Details</h2>
            <button onClick={
                () => history.push("/posts/create")
            }>
                Create New Post
            </button>{' '}
            <div>
                {
                    filteredPosts.map(post => {
                        return <PostDetail key={post.id} post={post} />
                    })
                }
            </div>
        </>
    )
}