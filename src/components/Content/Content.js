import { Contact } from '../Contact/Contact';
import { Home } from '../Home/Home';
import { Investments } from '../Investments/Investments';
import { AboutUs } from '../AboutUs/AboutUs';
import { Services } from '../Services/Services';
import { Register } from '../Register/Register';
import './style.css';

export const Content = () => {
    return (
        <div className="content">
            <Home />
            <Contact />
            <Investments />
            <AboutUs />
            <Services />
            <Register />
        </div>
    );
}