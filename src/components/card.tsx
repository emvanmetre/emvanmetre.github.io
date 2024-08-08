import React from 'react'
import '../styles/card.scss'

type CardProps = {
    darkMode?: boolean
    children?: React.ReactNode
}

const Card = (props: CardProps) => {
    const classNames = ['card', props.darkMode ? 'card-dark' : '']
    return <div className={classNames.toString()}>{props.children}</div>
}

export default Card
