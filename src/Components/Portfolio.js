import React, { Component } from "react";
// import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap" style={{width:"650"}}>
            <a href={projects.url} target="blank"> <img src={projectImage} alt={projects.title} /></a>
          </div>
          <div style={{ textAlign: "center" }}>
            <span style={{ textAlign: "center", fontWeight: "bolder", color: "black" }}>
              <a href={projects.url1} target="blank"> {projects.title}</a>
            </span></div>
          <p style={{ color: "blue", textAlign: "center" }}>{projects.description}</p>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out  My Projects.</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
                
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
