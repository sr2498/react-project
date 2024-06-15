import React from "react";

class Cards extends React.Component {
  state = {};
  render() {
    return (
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card">
            <img
              src="./public/Dress.jpg"
              className="Dress-image"
              alt="A Stylish Dress"
            />
            <div className="card-body">
              <h5 className="card-title">Party Dress</h5>
              <p className="card-text">
                There are lots of verity of stylish and party dresses. Dresses
                are available for different color and fabric in low price.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="./public/Purse.jpg"
              className="Purse-image"
              alt="A Stylish Purse"
            />
            <div className="card-body">
              <h5 className="card-title">Beautiful Purse</h5>
              <p className="card-text">
                There are variety of party purses are available. Large range of
                color and fancy. Beautiful and strong Material.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="./public/Shoe.jpg"
              className="Shoe-image"
              alt="Stylish Shoe"
            />
            <div className="card-body">
              <h5 className="card-title">Lady Shoe</h5>
              <p className="card-text">
                There are variety of party waer shoe are available. Large range
                of color and different material. Guarantee for comfort.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="./public/Make-up.jpg"
              className="Makeup-image"
              alt="Awesome Makeup-kit"
            />
            <div className="card-body">
              <h5 className="card-title">Makeup-Kit</h5>
              <p className="card-text">
                There are variety of cosmetics such as foundation, lipstick,
                eyeliner, mascara and brushes are available of different brands.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
