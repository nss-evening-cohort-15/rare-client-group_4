import React, { useContext, useEffect, useState } from "react"
import { PostContext } from "./PostProvider"
import "./Post.css"
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"

export const PostDetail = (props) => {
    const { posts, deletePost } = useContext(PostContext)
    const [post, setPost] = useState(props.post || { user: {} })
    const { getUsers } = useContext(UserContext)



}