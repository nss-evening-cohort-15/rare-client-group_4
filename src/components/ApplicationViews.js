import React from "react"
import { Route } from "react-router-dom"
import { PostProvider } from "./Post/PostProvider"
import { PostList } from "./Post/PostList"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <PostProvider>
                <Route path="/posts">
                    <PostList />
                </Route>
            </PostProvider>
        </main>
    </>
}
