import React, { useState } from "react";
import { CSSTransitionGroup } from "react-transition-group";
import leftArrow from "../images/Arrow-Left-White-Desktop.svg";
import rightArrow from "../images/Arrow-Right-White-Desktop.svg";
import heroImage from "../images/hero-image.png";

class ImageSlider extends React.Component {
  constructor() {
    super();
    this.state = {
      slides: [],
      index: 0
    };
  }

  getData = async () => {
    const response = await fetch(
      "https://www.bigbluedoor.net/frontend-developer-coding-task.json"
    );
    const data = await response.json();

    data.forEach((obj) => {
      this.setState({
        slides: [...this.state.slides, obj]
      });
    });
    this.setState({ index: 0 });
  };

  componentDidMount = () => {
    this.getData();
  };

  slideRight = () => {
    const nextIndex = this.state.index + 1;
    if (nextIndex > this.state.slides.length - 1) {
      this.setState({ index: 0 });
    } else {
      this.setState({ index: nextIndex });
    }
  };

  slideLeft = () => {
    const nextIndex = this.state.index - 1;
    if (nextIndex < 0) {
      this.setState({ index: this.state.slides.length - 1 });
    } else {
      this.setState({ index: nextIndex });
    }
  };

  dotChange = (e) => {
    let chosenDot = e.target.getAttribute("data-id");
    console.log(chosenDot);
    const nextIndex = this.state.index;
    this.setState({ index: e.target.getAttribute("data-id") });
  };

  render() {
    return (
      <div>
        <section
          className="hero"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundPosition: `center`
          }}
        >
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
            <button
              onClick={this.slideLeft}
              className="arrow arrow--left"
              style={{
                background: `none`,
                border: `none`,
                position: `absolute`,
                left: `15px`
              }}
            >
              <img alt="Left arrow" src={leftArrow} />
            </button>
            <div
              className="hero__dots"
              style={{
                display: `flex`,
                position: `absolute`,
                top: `30px`,
                right: `0px`
              }}
            >
              {this.state.slides.map((item, index) => {
                return (
                  <div
                    className="hero__dot"
                    key={item.index}
                    data-id={item.index}
                    style={{
                      height: `20px`,
                      width: `20px`,
                      margin: `0 3px`,
                      background:
                        item.index === this.state.index ? `#83008F` : `#fff`
                    }}
                    //onClick={this.dotChange.bind(this, item)}
                  ></div>
                );
              })}
            </div>
            <div
              className="hero__slides"
              style={{
                minHeight: `500px`,
                display: `flex`,
                alignItems: `center`
              }}
            >
              {this.state.slides.map((item, index) => {
                return (
                  <div
                    className={
                      item.index === this.state.index
                        ? "hero__slide hero__slide--active"
                        : "hero__slide"
                    }
                    key={item.index}
                    style={{
                      background: `#fff`,
                      display: `inline-block`,
                      padding: `30px 60px 30px 30px`,
                      position: `absolute`,
                      left: `100px`,
                      maxWidth: `460px`,
                      opacity: item.index === this.state.index ? `1` : `0`
                    }}
                  >
                    <h2
                      style={{
                        color: `#240053`,
                        fontSize: `30.5px`,
                        margin: `0px`
                      }}
                    >
                      {item.title}
                    </h2>
                    <p>{item.summary}</p>
                    <button
                      href={item.link.anchor}
                      style={{
                        background: `#83008F`,
                        color: `#fff`,
                        border: `2px solid #83008F`,
                        padding: `10px 20px 10px 20px`,
                        display: `flex`,
                        justifyContent: `space-between`,
                        minWidth: `170px`
                      }}
                    >
                      {item.link.text}
                      <img
                        src={rightArrow}
                        alt="Right arrow"
                        style={{
                          width: `8px`
                        }}
                      />
                    </button>
                  </div>
                );
              })}
            </div>
            <button
              onClick={this.slideRight}
              className="arrow arrow--left"
              style={{
                background: `none`,
                border: `none`,
                position: `absolute`,
                right: `15px`
              }}
            >
              <img alt="Right arrow" src={rightArrow} />
            </button>
          </div>
        </section>
      </div>
    );
  }
}

export default ImageSlider;
