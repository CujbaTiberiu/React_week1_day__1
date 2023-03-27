const NavBar = (props) => (
    <header>
        <nav>
            <ul className="nav__ul">
                <li><a href="http://" target="_blank" rel="noopener noreferrer">{props.firstAnchor}</a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer">{props.secondAnchor}</a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer">{props.thirdAnchor}</a></li>
            </ul>
        </nav>
    </header>
)

export default NavBar