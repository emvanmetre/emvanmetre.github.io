type IconProps = {
    svg: string
    color: string
    size?: 'sm' | 'md' | 'lg'
}

const Icon = (props: IconProps) => {
    return(<div className={`icon icon-${props.svg} icon-color-${props.color}${props.size ? ' ' + props.size : ''}`}></div>)
}

export default Icon