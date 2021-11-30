import React, { useContext } from "react"
import { PostContext } from "./PostProvider"
import "./Post.css"

export const PostSearch = () => {
    const { setSearchTerms } = useContext(PostContext)

    return (
        <>
            <section>
                <input type="text"
                    onKeyUp={(event) => setSearchTerms(event.target.value)}
                    placeholder="Search for a specific post... " />
            </section>
        </>
    )
}