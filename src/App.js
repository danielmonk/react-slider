import React, { useState, useCallback } from "react";
import { useQuery } from "react-query";
import ImageSlider from "./components/ImageSlider";
import UICards from "./components/UICards";
import styles from "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      index: "",
      title: "",
      summary: "",
      link: []
    };
  }

  render() {
    return (
      <div className="App">
        <div
          className="container"
          style={{
            maxWidth: `1280px`,
            margin: `15px auto 0`,
            padding: `0 15px`,
            display: `flex`,
            alignItems: `center`,
            position: `relative`
          }}
        >
          <h1>Carousel</h1>
        </div>
        <ImageSlider />
        <div
          className="container"
          style={{
            maxWidth: `1280px`,
            margin: `15px auto 0`,
            padding: `0 15px`,
            display: `flex`,
            alignItems: `center`,
            position: `relative`
          }}
        >
          <h1
            style={{
              marginTop: `50px`
            }}
          >
            UI Cards
          </h1>
        </div>
        <UICards />
      </div>
    );
  }
}

export default App;
