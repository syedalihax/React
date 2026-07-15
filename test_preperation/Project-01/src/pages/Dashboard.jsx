import React, { useState } from 'react'

const Dashboard = () => {
    const [username, setUsername] = useState('')
    return (
        <>
        <h1>Wellcome {username}</h1>
        </>
    )
}

export default Dashboard
