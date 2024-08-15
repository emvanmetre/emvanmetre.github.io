import React from 'react'
import { Card, InnovateSVG, RetroGridSVG, RetroWindowSVG } from '../components/'
import { useMediaQuery } from 'react-responsive'

const Home = () => {
  document.body.classList.add('webpage')
  const isScreenSmall = useMediaQuery({ maxWidth: '1150px' })
  return (
    <>
      <div className={isScreenSmall ? "header-box sm" : "header-box"}>
        <RetroWindowSVG classNames={isScreenSmall ? "retro-window-sm" : "retro-window"} />
        <RetroGridSVG classNames={isScreenSmall ?'retro-grid-sm' : 'retro-grid'} />
        <InnovateSVG classNames={'innovate-logo'} small={isScreenSmall} />
      </div>
      <div className="content">
        <div className="content-bounded">
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
    </>
  )
}

export default Home
