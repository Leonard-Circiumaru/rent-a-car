import { NavButton } from './NavButton/NavButton';
import './style.css';

export const Navigation = () => {
    return <div className="menu-bar">
        <NavButton label="Home" active={true} path="/home" />
        <NavButton label="About Us" path="/about-us" />
        <NavButton label="Services" path="/services" />
        <NavButton label="Contact" path="/contact" />
        <NavButton label="Investments" path="/investments" />
        <NavButton label="Register/Log In" path="register" />
    </div>
}