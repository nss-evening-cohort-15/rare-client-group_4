import React, { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ProfileContext } from "./ProfileProvider"

const currentUser = parseInt(sessionStorage.getItem("rare_user_id"))

export const ProfileList = () => {
    const { profiles, getProfileById } = useContext(ProfileContext)
    const { userId } = useParams();

    useEffect(() => {
        getProfileById()
    }, [])

    return (
        <>
            <h2>Profile</h2>
            <section className="profile">
                {
                    profiles.map(profile => {
                        return (
                            <div className="user_info">
                                <div>
                                    {profile.first_name} {profile.last_name}
                                </div>
                                <div>
                                    {profile.profile_image_url}
                                </div>
                                <div>
                                    Bio: {profile.bio}
                                </div>
                                <div>
                                    Created on {profile.created_on}
                                </div>
                            </div>
                        )
                    })
                }
            </section>
        </>
    )
}

