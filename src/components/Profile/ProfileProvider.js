import React, { useState, createContext } from "react"

export const ProfileContext = createContext()

export const ProfileProvider = (props) => {
    const [profiles, setProfiles] = useState([])

    const getProfiles = () => {
        return fetch("http://localhost:8088/users")
            .then(res => res.json())
            .then(setProfiles)
    }

    const getProfileById = (userId) => {
        return fetch(`http://localhost:8088/users/${userId}`)
            .then(res => res.json())
    }

    return (
        <ProfileContext.Provider value={{
            profiles, getProfiles, getProfileById
        }}>
            {props.children}
        </ProfileContext.Provider>
    )
}