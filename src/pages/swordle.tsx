import React from 'react'
import { Text } from '../components/'
import { useMediaQuery } from 'react-responsive'

const Swordle = () => {
  document.body.classList.add('webpage')
  const isScreenSmall = useMediaQuery({ maxWidth: '1150px' })
  return (
    <>
      <div className={isScreenSmall ? 'header-box sm' : 'header-box'}></div>
      <div className="content">
        <div className="content-bounded">
          <Text size="lg" font="display">
            ...are you Ready for It?
          </Text>
        </div>
      </div>
    </>
  )
}

export default Swordle
