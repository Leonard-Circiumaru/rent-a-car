import "./style.css";
import React from "react";


export class AboutUs extends React.Component {
    render() {
        return <div className="about">
            <img src="/img/renault.jpg" alt=""></img>
            <div className="about-txt">
                <h1>About Us</h1>
                <h5>Developer & <span>Design</span></h5>
                <p>Renault S.A. is a French automobile manufacturing company founded in 1899.
                    It is based in Boulogne, France and is one of the largest car manufacturers in the country.
                    The company manufactures a wide range of vehicles, including cars, trucks, buses and electric vehicles.
                    Renault is known for its innovative designs and has been a leader in the development of electric vehicles, especially in Europe.
                    Following the alliance with the Japanese group Nissan, it became one of the largest car manufacturers in the world.</p>
                    <button className="info" type="button">Let's talk</button>
            </div>
        </div>
    }
}