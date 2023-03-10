import "./style.css";
import React from "react";


export class Services extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="box">
                    <h2>01</h2>
                    <h3>Rent</h3>
                    <p>The best rental cars have a lot of equipment. It's worth trying</p>
                </div>
                <div className="box">
                    <h2>02</h2>
                    <h3>Innovation</h3>
                    <p>The cars manufactured by Renault have a wide range of innovation and are some of the best choices.</p>
                </div>
                <div className="box">
                    <h2>03</h2>
                    <h3>Support</h3>
                    <p>Whenever you need a good car, do not hesitate to contact us, we will offer you support anywhere.</p>
                </div>
            </div>
          );
        }
    }

