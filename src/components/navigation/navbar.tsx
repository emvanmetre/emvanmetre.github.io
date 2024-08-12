import { useMediaQuery } from 'react-responsive'
import { Link, Icon, Menu, MenuItem, NavList, Text } from '../index'
import '../../styles/navbar.scss'

type NavbarProps = {
    darkMode?: boolean
}

const Navbar = (props: NavbarProps) => {
    const isScreenSmall = useMediaQuery({ maxWidth: '1150px' })
    const navColor = props.darkMode ? 'nav-dark-mode' : 'nav-light-mode'
    if (isScreenSmall) {
        return (
            <nav className={`nav ${navColor}`}>
                <Link to="/" type="nav">
                    <Icon svg="logo" size="md" color={`${props.darkMode ? 'colors-purple-600' : 'colors-purple-600'}`} />
                    <Text font="display" size="xs">
                        Elizabeth Van Metre
                    </Text>
                </Link>
                <NavList size="sm">
                    <Menu icon="menu" iconColor="colors-purple-600" buttonColor="blank">
                        <MenuItem isDisabled textValue='About'>
                            <Link to="/about" type="nav-menu">
                                About
                            </Link>
                        </MenuItem>
                        <MenuItem isDisabled textValue='About 2'>
                            <Link to="/about" type="nav-menu">
                                About 2
                            </Link>
                        </MenuItem>
                        <MenuItem isDisabled textValue='About 3'>
                             <Link to="/about" type="nav-menu">
                                <Text slot="label">
                                    Link 3
                                </Text>
                            </Link>
                        </MenuItem>
                    </Menu>
                </NavList>
            </nav>
        )
    } else {
        return (
            <nav className={`nav`}>
                <Link to="/" type="nav">
                    <Icon svg="logo" color="colors-purple-600" size="md" />
                    <Text font="display" size="xs">
                        Elizabeth Van Metre
                    </Text>
                </Link>
                <NavList>
                    <Link to="/about" type="nav">
                        <Text font="body" size="md" weight="bold">
                            About
                        </Text>
                    </Link>
                    <Link to="/about" type="nav">
                        <Text font="body" size="md" weight="bold">
                            Link 2
                        </Text>
                    </Link>
                </NavList>
            </nav>
        )
    }
}

export default Navbar
