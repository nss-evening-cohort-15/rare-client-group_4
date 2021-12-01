import React, { useContext, useEffect, useState } from "react"
import { PostContext } from "./PostProvider"
import { ProfileContext } from "../Profile/ProfileProvider"
import "./Post.css"
import { useHistory, useParams } from "react-router-dom"


export const PostForm = () => {
    const { addPost, getPostById, updatePost } = useContext(PostContext)
    const { getProfiles } = useContext(ProfileContext)
    // const { users, getUsers } = useContext(UserContext)

    const [post, setPost] = useState({
        id: 0,
        user_id: 0,
        category_id: 0,
        title: "",
        publication_date: "",
        image_url: "",
        content: "",
        approved: false
    })

    const history = useHistory();
    const { postId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    // const { userId } = useParams();
    // const [value, setValue] = setState("")

    // const editCheckChange = (event) => {
    //     const newPost = { ...post }
    //     newPost[event.target.id] = event.target.value
    //     setPost(newPost)
    // }

    useEffect(() => {
        getProfiles()
    }, [])

    useEffect(() => {
        if (postId) {
            getPostById(postId)
                .then(post => {
                    setPost(post)
                    setIsLoading(false)
                })
        } else {
            setIsLoading(false)
        }
    }, [])

    const currentUser = parseInt(sessionStorage.getItem("rare_user_id"))

    const savePost = () => {
        if (post.title === "" || post.content === "") {
        } else {
            setIsLoading(true);
            if (postId) {
                updatePost({
                    id: parseInt(postId),
                    user_id: post.user_id,
                    category_id: post.category_id,
                    title: post.title,
                    publication_date: post.publication_date,
                    image_url: post.image_url,
                    content: post.content,
                    approved: post.approved,
                })
                    .then(() => history.push(`/posts`))
            } else {
                addPost({
                    user_id: post.user_id,
                    category_id: post.category_id,
                    title: post.title,
                    publication_date: post.publication_date,
                    image_url: post.image_url,
                    content: post.content,
                    approved: post.approved,
                })
                    .then(() => history.push(`/posts`))
            }
        }
    }

    return (
        <>
            <h2>{postId ? <>Edit Post</> : <> Add New Post</>}</h2>
            <h3>TEST</h3>
            <button
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault()
                    savePost()
                }}>
                {postId ? <>Save Post</> : <>Add Post</>}
            </button>{' '}
        </>
    )









}