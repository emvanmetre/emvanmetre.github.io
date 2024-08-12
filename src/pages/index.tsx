import React from 'react'
import Card from '../components/card'

const Home = () => {
    document.body.classList.add('dark-mode')
    return (
        <div className="content">
            <h1>Welcome to GeeksforGeeks</h1>
            <Card size="standard" ariaLabel="pretend button">
                Hello
            </Card>
        </div>
    )
}

export default Home
