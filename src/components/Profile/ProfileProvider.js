import React, { useState, createContext } from "react"

export const ProfileContext = createContext()

export const ProfileProvider = (props) => {
    const [profiles, setProfiles] = useState([])
    const [currentUser, setCurrentUser] = useState({})

    const getProfiles = () => {
        return fetch("http://localhost:8088/users")
            .then(res => res.json())
            .then(setProfiles)
    }

    const getProfileById = (userId) => {
        return fetch(`http://localhost:8088/users/${userId}`)
        .then(res => res.json())
        .then(setCurrentUser)
    }

    return (
        <ProfileContext.Provider value={{
            profiles, getProfiles, getProfileById, currentUser
        }}>
            {props.children}
        </ProfileContext.Provider>
    )
}