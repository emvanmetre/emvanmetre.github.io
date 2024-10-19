import React from 'react'
import GHHProject from 'ghh-24'
// import { Text, InnovateSVG, RetroGridSVG, RetroWindowSVG } from '../components/'
// import { useMediaQuery } from 'react-responsive'

const GHH = () => {
  document.body.classList.add('webpage')
//   const isScreenSmall = useMediaQuery({ maxWidth: '1150px' })
  return (
    <>
      <GHHProject></GHHProject>
    </>
  )
}

export default GHH