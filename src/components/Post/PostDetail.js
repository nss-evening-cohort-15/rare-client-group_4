import React, { useContext, useEffect, useState } from "react"
import { PostContext } from "./PostProvider"
import "./Post.css"
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { ProfileContext } from "../Profile/ProfileProvider"

export const PostDetail = (props) => {
    const { posts, deletePost } = useContext(PostContext)
    const [post, setPost] = useState(props.post || { user: {} })
    const { getProfiles } = useContext(ProfileContext)
    const { postId } = useParams();
    const history = useHistory()

    const handleRelease = () => {
        deletePost(post.id)
            .then(() => {
                history.push("/posts")
            })
    }

    useEffect(() => {
        // getProfiles()
        console.log(props);
        if (!props.post) {
            const thisPost = posts.find(post => post.id === parseInt(postId)) || { user: {} }
            setPost(thisPost)
        }
    }, [postId])

    return (
        <>
            <section className="posts">
                <div className="post">
                    <div>Title: {post.title}</div>
                    <div>Published: {post.publication_date}</div>
                    <div>{post.content}</div>
                    <div>image:{post.image_url}</div>
                </div>
            </section>
        </>
    )

}