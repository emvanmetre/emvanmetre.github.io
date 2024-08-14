import React from 'react'
import Card from '../components/card'

const Home = () => {
    document.body.classList.add('webpage')
    return (
        <div className="content">
            <div className='content-bounded'>
                <h1>Welcome to GeeksforGeeks</h1>
                <Card size="standard" ariaLabel="pretend button">
                    Hello
                </Card>
                <h1>Welcome to GeeksforGeeks</h1>

                <Card size="standard" ariaLabel="pretend button">
                    Hello
                </Card>
                <h1>Welcome to GeeksforGeeks</h1>

                <Card size="standard" ariaLabel="pretend button">
                    Hello
                </Card>
                <h1>Welcome to GeeksforGeeks</h1>

                <Card size="standard" ariaLabel="pretend button">
                    Hello
                </Card>
                <h1>Welcome to GeeksforGeeks</h1>

                <Card size="standard" ariaLabel="pretend button">
                    Hello
                </Card>
                <Card size="standard" ariaLabel="pretend button">
                    Hello
                </Card>
                <Card size="standard" ariaLabel="pretend button">
                    Hello
                </Card>
            </div>
        </div>
    )
}

export default Home
