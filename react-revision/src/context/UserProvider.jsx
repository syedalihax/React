import { useState } from "react";
import UserContext from "./UserContext";


function UserProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

    const register = (userData) => {
        setLoading(true)

        setTimeout(() => {
            setUser(userData)
            setLoading(false)
        }, 2000);
    }
    const login = (userData) => {
        setLoading(true)

        setTimeout(() => {
            setUser(userData)
            setLoading(false)
        }, 2000);
    }
    const logOut = () => {
        setUser(null)
    }

    const change = () => {
        const changedUser = {
            name: 'Hassan',
            email: 'SyedHassan@gmail.com'
        }
        setLoading(true)
        setTimeout(() => {
            setUser(changedUser)
            setLoading(false)
        }, 1000);
    }
    const contextValue = {
        user,
        login,
        logOut,
        change,
        loading,
        register
    }

    return (
        <>
            <UserContext.Provider value={contextValue}>
                {children}
            </UserContext.Provider>
        </>
    )
}

export default UserProvider