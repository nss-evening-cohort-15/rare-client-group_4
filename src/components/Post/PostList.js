import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { PostContext } from "./PostProvider"
import "./Post.css"

export const PostList = () => {

    const { posts, getPosts } = useContext(PostContext)


    useEffect(() => {
        getPosts()
    }, [])

    const history = useHistory()

    return (
        <>
            <h2>Posts</h2>
            <button onClick={
                () => history.push("/posts/create")
            }>
                Create New Post
            </button>
            <section className="posts">
                {
                    posts.map(post => {
                        return (
                            <div className="post">
                                <div>
                                    Title: {post.title}
                                </div>
                                <div>
                                    Published: {post.publication_date}
                                </div>
                                <div>
                                    {post.content}
                                </div>
                            </div>
                        )
                    })
                }
            </section>
        </>
    )
}