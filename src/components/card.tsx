import React from 'react'
import '../style.css'

type CardProps = {
    darkMode?: boolean
    size?: 'standard' | 'reactive'
    children?: React.ReactNode
}

const Card = (props: CardProps) => {
    const classNames = `card${props.darkMode ? ' card-dark' : ''}${props.size ? ' card-' + props.size : ''}`
    return <div className={classNames} tabIndex={0}>{props.children}</div>
}

export default Card
