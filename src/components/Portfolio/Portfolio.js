import React, { Component } from "react";
import axios from "axios";
import {
  PortStyled,
  PortItemsStyled,
  PortItemStyled,
  PortStyledUl,
  PortStyledLI,
  PortStyledImg,
  PortStyledAnchor,
} from "./portStyle";
import Header from "../Header/Header";
class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      Portfolio: [],
    };

    this.html = this.html.bind(this);

    this.all = this.all.bind(this);

    this.css = this.css.bind(this);

    this.Javascript = this.Javascript.bind(this);

    this.php = this.php.bind(this);
  }

  componentDidMount = async () => {
    try {
      let data = await axios.get("data/data.json");
      this.setState({
        Portfolio: data.data[0].port,
      });
    } catch (error) {
      throw new Error(`Can't get data:`);
    }
  };
  // componentDidMount() {
  //   axios
  //     .get("data/data.json")
  //     .then((res) => {
  //       this.setState({
  //         Portfolio: res.data[0].port
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }
  all() {
    axios
      .get("data/data.json")
      .then((res) => {
        this.setState({
          Portfolio: res.data[0].port,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  html() {
    axios
      .get("data/data.json")
      .then((res) => {
        const html = res.data[0].port.filter((item) => item.name === "Html");
        this.setState({
          Portfolio: html,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  css() {
    axios
      .get("data/data.json")
      .then((res) => {
        const html = res.data[0].port.filter((item) => item.name === "Css");
        this.setState({
          Portfolio: html,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  Javascript() {
    axios
      .get("data/data.json")
      .then((res) => {
        const html = res.data[0].port.filter((item) => item.name === "Javascript");
        this.setState({
          Portfolio: html,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  php(e) {
    axios
      .get("data/data.json")
      .then((res) => {
        const html = res.data[0].port.filter((item) => item.name === "Php");
        this.setState({
          Portfolio: html,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const updated = this.state.Portfolio.map((item) => {
      return (
        <PortItemStyled  key={item.id}>
          <span style={{margin:"10px 0",display:"block"}}>{item.name}</span>
          <PortStyledImg src={item.img_url} alt='imgAlt' />
        </PortItemStyled>
      );
    });

    return (
      <PortStyled className='section'>
        <Header />
        <h2>Portfolio</h2>
        <PortStyledUl>
          <PortStyledLI className='LI'>
            <PortStyledAnchor  className='Anchor' onClick={this.all}>
              All
            </PortStyledAnchor>
          </PortStyledLI>
          <PortStyledLI className='LI'>
            <PortStyledAnchor className='Anchor' onClick={this.html}>
              Html
            </PortStyledAnchor>
          </PortStyledLI>
          <PortStyledLI className='LI'>
            <PortStyledAnchor className='Anchor' onClick={this.css}>
              Css
            </PortStyledAnchor>
          </PortStyledLI>
          <PortStyledLI className='LI'>
            <PortStyledAnchor className='Anchor' onClick={this.Javascript}>
              Javascript
            </PortStyledAnchor>
          </PortStyledLI>
          <PortStyledLI>
            <PortStyledAnchor className='Anchor' onClick={this.php}>
              Php
            </PortStyledAnchor>
          </PortStyledLI>
        </PortStyledUl>
        <PortItemsStyled>{updated}</PortItemsStyled>
      </PortStyled>
    );
  }
}

export default Portfolio;
