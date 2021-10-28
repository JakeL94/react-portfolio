import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <header>
            <h1>Jake Lee's Portfolio</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to ='/portfolio'>Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink to ='/contact'>Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to ='/'>About</NavLink>
                    </li>
                    <li>
                        <a href='resume link'>Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;