import React from "react"
import { Route } from "react-router-dom"
import { PostProvider } from "./Post/PostProvider"
import { PostList } from "./Post/PostList"
import { PostForm } from "./Post/PostForm"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <PostProvider>
                <Route exact path="/posts">
                    <PostList />
                </Route>
                <Route path="/posts/create">
                    <PostForm />
                </Route>
            </PostProvider>
        </main>
    </>
}
