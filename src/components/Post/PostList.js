import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { PostContext } from "./PostProvider"
import { PostDetail } from "./PostDetail"
import "./Post.css"

export const PostList = () => {

    const { posts, getPosts, searchTerms } = useContext(PostContext)

    const [filteredPosts, setFiltered] = useState([])
    // const history = useHistory()

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
            <div>
                <h1>Posts</h1>
                <div>
                    {
                        filteredPosts.map(post => {
                            return <PostDetail key={post.id} post={post} />
                        })
                    }
                </div>
            </div>
        </>
    )
}