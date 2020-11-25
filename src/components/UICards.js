import React, { useState } from "react";
import cardImage1 from "../images/placement-area-1.png";
import cardImage2 from "../images/placement-area-2.png";
import cardImage3 from "../images/placement-area-3.png";
import cardImage4 from "../images/placement-area-4.png";
import rightArrow from "../images/Arrow-Right-White-Desktop.svg";

class UICards extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: []
    };
  }

  getData = async () => {
    const response = await fetch("../data/UICards.json");
    const data = await response.json();

    data.forEach((obj) => {
      this.setState({
        cards: [...this.state.cards, obj]
      });
    });
  };

  componentDidMount = () => {
    this.getData();
  };

  render() {
    return (
      <div>
        <section className="cards" style={{}}>
          <div
            className="container"
            style={{
              maxWidth: `1280px`,
              margin: `0 auto`,
              padding: `0 15px`,
              display: `flex`,
              alignItems: `center`,
              position: `relative`
            }}
          >
            <div
              className="cards__wrapper"
              style={{
                position: `relative`,
                alignItems: `center`,
                display: `flex`,
                margin: `15px -15px`,
                paddingBottom: `100px`
              }}
            >
              <div
                className={"cards__single"}
                style={{
                  background: `#fff`,
                  display: `inline-block`,
                  padding: `0`,
                  flex: `1`,
                  margin: `0 20px`
                }}
              >
                <div
                  className="card__image"
                  alt="Non mollit"
                  src={cardImage1}
                  style={{
                    width: `100%`,
                    backgroundSize: `cover`,
                    backgroundImage: `url(${cardImage1})`,
                    height: `200px`
                  }}
                ></div>
                <span
                  className="cards__title"
                  style={{
                    width: `auto`,
                    background: `#240053`,
                    color: `#fff`,
                    fontWeight: `bold`,
                    padding: `15px 20px`,
                    position: `relative`,
                    zIndex: `1`,
                    marginTop: `0`,
                    display: `flex`,
                    justifyContent: `space-between`
                  }}
                >
                  Non mollit
                  <img
                    src={rightArrow}
                    alt="Right arrow"
                    style={{
                      width: `8px`
                    }}
                  />
                </span>
                <p
                  style={{
                    padding: `15px 20px`,
                    border: `2px solid #ebebeb`,
                    marginTop: `-2px`,
                    minHeight: `80px`,
                    color: `#4d4f53`
                  }}
                >
                  Tempor pariatur laboris sunt excepteur exercitation veniam
                  cillum dolore et est aute mollit tempor deserunt
                </p>
              </div>
              <div
                className={"cards__single"}
                style={{
                  background: `#fff`,
                  display: `inline-block`,
                  padding: `0`,
                  flex: `1`,
                  margin: `0 20px`
                }}
              >
                <div
                  className="card__image"
                  alt="Non mollit"
                  src={cardImage1}
                  style={{
                    width: `100%`,
                    backgroundSize: `cover`,
                    backgroundImage: `url(${cardImage2})`,
                    height: `200px`
                  }}
                ></div>
                <span
                  className="cards__title"
                  style={{
                    width: `auto`,
                    background: `#240053`,
                    color: `#fff`,
                    fontWeight: `bold`,
                    padding: `15px 20px`,
                    position: `relative`,
                    zIndex: `1`,
                    marginTop: `0`,
                    display: `flex`,
                    justifyContent: `space-between`
                  }}
                >
                  Sunt nostrud
                  <img
                    src={rightArrow}
                    alt="Right arrow"
                    style={{
                      width: `8px`
                    }}
                  />
                </span>
                <p
                  style={{
                    padding: `15px 20px`,
                    border: `2px solid #ebebeb`,
                    marginTop: `-2px`,
                    minHeight: `80px`,
                    color: `#4d4f53`
                  }}
                >
                  Cillum lorem qui qui lorem nulla nulla consequat culpa est
                  ipsum veniam irure ullamco tempor
                </p>
              </div>
              <div
                className={"cards__single"}
                style={{
                  background: `#fff`,
                  display: `inline-block`,
                  padding: `0`,
                  flex: `1`,
                  margin: `0 20px`
                }}
              >
                <div
                  className="card__image"
                  alt="Non mollit"
                  src={cardImage1}
                  style={{
                    width: `100%`,
                    backgroundSize: `cover`,
                    backgroundImage: `url(${cardImage3})`,
                    height: `200px`
                  }}
                ></div>
                <span
                  className="cards__title"
                  style={{
                    width: `auto`,
                    background: `#240053`,
                    color: `#fff`,
                    fontWeight: `bold`,
                    padding: `15px 20px`,
                    position: `relative`,
                    zIndex: `1`,
                    marginTop: `0`,
                    display: `flex`,
                    justifyContent: `space-between`
                  }}
                >
                  Deserunt ea
                  <img
                    src={rightArrow}
                    alt="Right arrow"
                    style={{
                      width: `8px`
                    }}
                  />
                </span>
                <p
                  style={{
                    padding: `15px 20px`,
                    border: `2px solid #ebebeb`,
                    marginTop: `-2px`,
                    minHeight: `80px`,
                    color: `#4d4f53`
                  }}
                >
                  Aliquip adipisicing excepteur nulla laboris reprehenderit
                  lorem fugiat culpa reprehenderit ipsum amet
                </p>
              </div>
              <div
                className={"cards__single"}
                style={{
                  background: `#fff`,
                  display: `inline-block`,
                  padding: `0`,
                  flex: `1`,
                  margin: `0 20px`
                }}
              >
                <div
                  className="card__image"
                  alt="Non mollit"
                  src={cardImage1}
                  style={{
                    width: `100%`,
                    backgroundSize: `cover`,
                    backgroundImage: `url(${cardImage4})`,
                    height: `200px`
                  }}
                ></div>
                <span
                  className="cards__title"
                  style={{
                    width: `auto`,
                    background: `#240053`,
                    color: `#fff`,
                    fontWeight: `bold`,
                    padding: `15px 20px`,
                    position: `relative`,
                    zIndex: `1`,
                    marginTop: `0`,
                    display: `flex`,
                    justifyContent: `space-between`
                  }}
                >
                  Esse eu
                  <img
                    src={rightArrow}
                    alt="Right arrow"
                    style={{
                      width: `8px`
                    }}
                  />
                </span>
                <p
                  style={{
                    padding: `15px 20px`,
                    border: `2px solid #ebebeb`,
                    marginTop: `-2px`,
                    minHeight: `80px`,
                    color: `#4d4f53`
                  }}
                >
                  Id eu laboris do veniam culpa do nulla irure eiusmod nulla
                  voluptate consequat mollit in
                </p>
              </div>
              {/*  
            {this.state.cards.map((item, index) => {
              console.log(this.state.index);
              return (
                <div
                  className={"cards__single"}
                  key={item.index}
                  style={{
                    background: `#fff`,
                    display: `inline-block`,
                    padding: `30px 60px 30px 30px`
                  }}
                >
                  <img alt={item.title} src={this.image} />
                  <span className="cards__title">{item.title}</span>
                  <p>{item.content}</p>
                </div>
              );
            })}
          */}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default UICards;
