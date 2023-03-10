import "./style.css";
import React from "react";

export class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <img src="/img/captur.jpg" alt=""></img>
                <img src="/img/duster.jpg" alt=""></img>
                <div className="about-text">
                    <h1>Captur</h1>
                    <p>Captur is making a splash with its new E-Tech engineered hybrid and plug-in hybrid versions.
                        Its unique personality is highlighted by the radiator grille and rear bumper with a gloss black finish. The F1® louvre and warm titanium tailpipes underline the dynamic styling and contrast with the Cassiope* gray exterior.
                        The left side of the vehicle is distinguished by the E-Tech engineered logo, and the rear by the E-Tech logo in black and gold.</p>
                </div>
                <div className="text">
                    <h1>Duster</h1>
                    <p>The new Dacia Duster was put to the test in the Moroccan desert, where it all started 12 years ago for the best-selling Romanian model, writes the French publication 20MINUTES, quoted by Rador.
                        Why did Groupe Renault choose Marrakech to celebrate Duster's twelfth anniversary? It is simply a return to basics. Here the international press was able to test the model that has since sold more than 2.1 million units for the first time.
                        Since then, the Duster has progressed enormously.</p>
                </div>
            </div>
        );
    }
}