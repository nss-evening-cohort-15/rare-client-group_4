import React, { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ProfileContext } from "./ProfileProvider"

const currentUser = parseInt(localStorage.getItem("rare_user_id"))
// const userProfile = []

export const ProfileList = () => {
    const { currentUser, getProfileById } = useContext(ProfileContext)
    // const { userId } = useParams();

    useEffect(() => {
        getProfileById(localStorage.getItem("rare_user_id"))
    }, [])

    return (
        <>
            <h2>Profile</h2>
            <section className="profile">
                <div className="user_info">
                    <div>
                        {currentUser.first_name} {currentUser.last_name}
                    </div>
                    <div>
                        {currentUser.profile_image_url}
                    </div>
                    <div>
                        Bio: {currentUser.bio}
                    </div>
                    <div>
                        Created on {currentUser.created_on}
                    </div>
                </div>
            </section>
        </>
    )
}

