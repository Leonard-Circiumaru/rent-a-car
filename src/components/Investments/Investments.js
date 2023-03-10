import "./style.css";
import React from "react";
import Carousel from "react-bootstrap/Carousel";


export class Investments extends React.Component {
    render() {
        return (
            <Carousel className="carousel">
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src="/img/logan.jpg"
                  alt="Dacia Logan"
                />
                <Carousel.Caption>
                  <h3>Dacia Logan</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src="/img/sandero.jpg"
                  alt="Dacia Sandero"
                />
                <Carousel.Caption>
                  <h3>Dacia Sandero</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src="/img/duster.jpg"
                  alt="Dacia Duster"
                />
                <Carousel.Caption>
                  <h3>Dacia Duster</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src="/img/clio.jpg"
                  alt="Renault Clio"
                />
                <Carousel.Caption>
                  <h3>Renault Clio</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src="/img/megane.jpg"
                  alt="Renault Megane"
                />
                <Carousel.Caption>
                  <h3>Renault Megane</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src="/img/talisman.jpg"
                  alt="Renault Talisman"
                />
                <Carousel.Caption>
                  <h3>Renault Talisman</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src="/img/captur.jpg"
                  alt="Renault Captur"
                />
                <Carousel.Caption>
                  <h3>Renault Captur</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src="/img/austral.jpg"
                  alt="Renault Austral"
                />
                <Carousel.Caption>
                  <h3>Renault Austral</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/img/arkana.png"
                  alt="Renault Arkana"
                />
                <Carousel.Caption>
                  <h3>Renault Arkana</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          );
        }
    }

    
