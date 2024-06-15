import React from "react";
import "./Cards.css"; // Ensure this path matches where your CSS file is located

class Cards extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card">
              <img
                src="/Dress.jpg"
                className="card-img-top"
                alt="A Stylish Dress"
              />
              <div className="card-body">
                <h5 className="card-title">Stylish Dress</h5>
                <p className="card-text">
                  There are lots of varieties of stylish and party dresses.
                  Dresses are available in different colors and fabrics at low
                  prices.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="/Purse.jpg"
                className="card-img-top"
                alt="A Stylish Purse"
              />
              <div className="card-body">
                <h5 className="card-title">Beautiful Purse</h5>
                <p className="card-text">
                  A variety of party purses are available. Large range of colors
                  and fancy styles. Beautiful and strong material.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="/Shoe.jpg"
                className="card-img-top"
                alt="Stylish Shoe"
              />
              <div className="card-body">
                <h5 className="card-title">Lady Shoe</h5>
                <p className="card-text">
                  A variety of party wear shoes are available. Large range of
                  colors and different materials. Guaranteed comfort.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="/Make-up.jpg"
                className="card-img-top"
                alt="Awesome Makeup-kit"
              />
              <div className="card-body">
                <h5 className="card-title">Makeup Kit</h5>
                <p className="card-text">
                  A variety of cosmetics such as foundation, lipstick, eyeliner,
                  mascara, and brushes are available from different brands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
