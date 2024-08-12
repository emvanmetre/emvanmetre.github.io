import { useMediaQuery } from 'react-responsive'
import { Link, Icon, Menu, MenuItem, NavList, Text } from '../index'
import '../../styles/navbar.scss'

const Navbar = () => {
    const isScreenSmall = useMediaQuery({ maxWidth: '1150px' })
    if (isScreenSmall) {
        return (
            <nav className={`nav`}>
                <Link to="/" type="nav">
                    <Icon svg="logo" color="colors-purple-600" size="md" />
                    <Text font="display" size="xs">
                        Elizabeth Van Metre
                    </Text>
                </Link>
                <NavList size="sm">
                    <Menu icon="menu" buttonColor="blank">
                        <MenuItem>
                            <Link to="/about" type="nav-menu">
                                About
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/about" type="nav-menu">
                                About 2
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/about" type="nav-menu">
                                Link 3
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
