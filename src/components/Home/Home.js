import React, { Component } from "react";
// import Image from "react-bootstrap/Image";
import { Carousel, Figure } from "react-bootstrap";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCharacters: [],
      filterCharacters: [],
    };
  }
  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        console.log("this is data from home api", data);
        this.setState({ allCharacters: data.results });
        console.log("this is all chracters", this.state.allCharacters);
      });
  }

  render() {
    let rickSanchez = this.state.allCharacters.map((element) => {
      if (element.name === "Rick Sanchez") {
        return (
          <div>
            <h1>{element.name}</h1>
          </div>
        );
      }
    });

    let mortySmith = this.state.allCharacters.map((element) => {
      if (element.name === "Morty Smith") {
        console.log("this is an element", element.image);
        return (
          <div>
            {/* <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src={element.image}
              />
              <Figure.Caption>{element.name}</Figure.Caption>
            </Figure> */}
            <img src={element.image} alt="" />
          </div>
        );
      }
    });

    let summerSmith = this.state.allCharacters.map((element) => {
      if (element.name === "Summer Smith") {
        return (
          <div>
            <h1>{element.name}</h1>
          </div>
        );
      }
    });

    let bethSmith = this.state.allCharacters.map((element) => {
      if (element.name === "Beth Smith") {
        return (
          <div>
            <h1>{element.name}</h1>
          </div>
        );
      }
    });

    let jerrySmith = this.state.allCharacters.map((element) => {
      if (element.name === "Jerry Smith") {
        return (
          <div>
            <h1>{element.name}</h1>
          </div>
        );
      }
    });
    //       return (
    // <div>
    //   <h1>{element.name}</h1>
    // </div>
    //       ):
    // return(

    // )
    // })
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/ntcywUtfIcq3_gMOJk_tQh3Ior3oFARLga_64nlBUfs.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{rickSanchez}</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/ntcywUtfIcq3_gMOJk_tQh3Ior3oFARLga_64nlBUfs.png"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>{mortySmith}</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/ntcywUtfIcq3_gMOJk_tQh3Ior3oFARLga_64nlBUfs.png"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>{summerSmith}</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/ntcywUtfIcq3_gMOJk_tQh3Ior3oFARLga_64nlBUfs.png"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>{bethSmith}</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/ntcywUtfIcq3_gMOJk_tQh3Ior3oFARLga_64nlBUfs.png"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>{jerrySmith}</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        {/* <div className="homeImage">
          <Image
            src="/images/ntcywUtfIcq3_gMOJk_tQh3Ior3oFARLga_64nlBUfs.png"
            fluid
          />
        </div>
        <div className="homeImage">
          <Image
            src="/images/ntcywUtfIcq3_gMOJk_tQh3Ior3oFARLga_64nlBUfs.png"
            fluid
          />
        </div> */}
      </div>
    );
  }
}

export default Home;
